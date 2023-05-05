import httpStatus from "http-status";

export function badRequestError(message: string): {
   code: number;
   message: string;
} {
   return {
      code: httpStatus.BAD_REQUEST,
      message,
   };
}
