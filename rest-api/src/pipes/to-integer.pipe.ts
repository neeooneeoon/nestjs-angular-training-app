import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ToIntegerPipe implements PipeTransform<String> {
    transform(value: string, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);

        if(isNaN(val)) {    //is not a number
            throw new BadRequestException('Conversion to number failed for seqNo');
        }

        return val;
    }
}