
const isDevelopment = process.env.NODE_ENV !== "production";

export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true only in production
    sameSite: isDevelopment ? "Lax" : "None", // None requires secure: true
    maxAge: 1000 * 60 * 60, // 1 hour
}