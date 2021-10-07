import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();

        const response = context.getResponse();
        const request = context.getRequest();
        const statusCode = exception.getStatus();

        return response.status(statusCode).json({
            status: statusCode,
            createdBy: "HttpExceptionFilter",
            errorMessage: exception.message.message
        });
    }

}