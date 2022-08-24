import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  subName?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  company?: string;

  @ApiProperty()
  baseUnit: string;

  @ApiProperty()
  smallUnit: string;

  @ApiProperty()
  conversionRatio: number;

  @ApiProperty({ required: false })
  tag?: string[];

  @ApiProperty({ required: false })
  type?: string[];

  @ApiProperty({ required: false })
  category?: string[];

  @ApiProperty({ required: false })
  imagePath?: string;
}

//Item model
// model Item{
//   id          Int       @id @default(autoincrement())
//   name        string
//   subname     string?
//   descripton  string?
//   company     string?
//   baseUnit    Int
//   smallUnit   Int
//   conversionRatio   Int @default(1000)
//   tag          string[]
//   type         string[]
//   category     string[]
//   ImagePath    string[]
