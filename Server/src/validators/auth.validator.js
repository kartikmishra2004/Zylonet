import { z } from "zod";

export const editProfileSchema = z.object({
    fullName: z
        .string({ required_error: "Name is required!!" })
        .trim()
        .min(4, { message: "Name must be atleast 4 characters long!!" })
        .max(30, { message: "Name cannot be more than 30 characters!!" }),
    aboutme: z
        .string({ required_error: "About is required!!" })
        .trim()
        .min(1, { message: "About must be atleast 1 character long!!" })
        .max(400, { message: "Password cannot be more than 400 characters!!" }),
});

export const loginSchema = z.object({
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(4, { message: "Username must be atleast 4 characters long!!" })
        .max(30, { message: "Username cannot be more than 30 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
});

export const signupSchema = z.object({
    fullName: z
        .string({ required_error: "Name is required!!" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters long!!" })
        .max(30, { message: "Name cannot be more than 30 characters!!" }),
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(4, { message: "Username must be atleast 4 characters long!!" })
        .max(30, { message: "Username cannot be more than 30 characters!!" }),
    email: z
        .string({ required_error: "Email is required!!" })
        .trim()
        .email({ message: "Invalid email address!!" })
        .min(3, { message: "Email must be at lease 3 characters long!!" })
        .max(30, { message: "Email cannot be more than 30 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
});