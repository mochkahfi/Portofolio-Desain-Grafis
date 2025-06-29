declare module 'emailjs-com' {
  export function send(
    serviceID: string,
    templateID: string,
    variables: Record<string, any>,
    userID: string
  ): Promise<any>;
}
