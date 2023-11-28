import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Todo from "App/Models/Todo";

export default class TodosController {
  public async index({}: HttpContextContract) {
    const data = await Todo.all();

    return data;
  }

  // public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const showSchema = schema.create({
      title: schema.string(),
      content: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: showSchema });

      const newTodo = await Todo.create(payload);
      response.created(newTodo);
    } catch (error) {
      response.badRequest(error.messages);
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const data = await Todo.findOrFail(request.param("id"));
      response.send(data); // return status code 200
    } catch (error) {
      response.notFound({ message: "not found" }); // return status code 404
    }
  }

  // public async edit({}: HttpContextContract) {}

  public async update({ request, response }: HttpContextContract) {
    const showSchema = schema.create({
      title: schema.string(),
      content: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: showSchema });
      const newTodo = await Todo.findOrFail(request.param("id"));
      newTodo.merge(payload).save();
      response.created(newTodo);
    } catch (error) {
      response.badRequest({ message: "not found" });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const todo = await Todo.findOrFail(request.param("id"));
      await todo.delete();
      response.send(todo); // return status code 200
    } catch (error) {
      response.notFound({ message: "not found" }); // return status code 404
    }
  }
}
