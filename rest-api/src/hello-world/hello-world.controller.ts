import { Controller, Get } from "@nestjs/common";

@Controller("hello-world")
export class HelloWorldController {

    @Get()
    async helloWorld(): Promise<string> {

        return "Hello World!";

    }

}