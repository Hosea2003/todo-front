import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]){
    return twMerge(clsx(classes))
}

export function formatDate(input:Date) {
    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();

    // Reset time for comparison
    now.setHours(0, 0, 0, 0);
    input.setHours(0, 0, 0, 0);

    const diffTime = input.getTime() - now.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === -1) return 'yesterday';
    if (diffDays === 1) return 'tomorrow';
    if (diffDays > 1 && diffDays < 7) return `in ${diffDays} days`;

    const day = input.getDate().toString().padStart(2, '0');
    const month = months[input.getMonth()];
    const year = input.getFullYear();

    return `${day} ${month} ${year}`;
}