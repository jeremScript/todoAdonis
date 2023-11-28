import React from 'react'

import { Flex, Text, Button } from '@radix-ui/themes';

export default function Home() {
    return (
        <div>
            <div class="alert">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12C0 5.37258 5.37258 0 12 0H28ZM26 6H14C9.71561 6 6.21784 9.36794 6.00979 13.6007L6 14V26C6 30.2844 9.36794 33.7822 13.6007 33.9902L14 34H26C30.2844 34 33.7822 30.6321 33.9902 26.3993L34 26V14C34 9.71561 30.6321 6.21784 26.3993 6.00979L26 6Z" fill="#969696" />
                </svg>
                <div class="flex flex-col">
                    <span>Title</span>
                    <span class="text-content2">Long sample text</span>
                </div>
            </div>
            <button className="btn btn-primary">Hello World!</button>
        </div>
    );
}