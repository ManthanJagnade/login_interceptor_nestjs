import {IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;
  }


// import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

// export class CreateFeedbackDto {
//   @IsEnum(['teacher', 'student'])
//   feedbackFor: string;

//   @IsString()
//   @IsNotEmpty()
//   feedbackMessage: string;

//   feedbackDate: Date;

//   @IsEnum(['gold', 'silver', 'bronze'])
//   rating: string;


//   feedbackSubject: string;

//   createdBy: {
//     type: String,
    
//   },
//   createdFor: {
//     type: String,
//       
    
//     created:
//       type: Date,
//       default: Date.now,
//     },


// }

  


  