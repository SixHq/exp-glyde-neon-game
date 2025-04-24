
import { useState, useEffect } from 'react';
import { differenceInSeconds, intervalToDuration } from 'date-fns';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
    targetDate: Date;
    className?: string;
    digitClassName?: string;
    labelClassName?: string;
}

// Helper function to format duration object into separate parts
const formatTimeLeft = (totalSeconds: number) => {
    if (totalSeconds <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }
    // Calculate duration safely
    const duration = intervalToDuration({ start: 0, end: Math.max(0, totalSeconds) * 1000 });
    return {
        days: String(duration.days ?? 0).padStart(2, '0'),
        hours: String(duration.hours ?? 0).padStart(2, '0'),
        minutes: String(duration.minutes ?? 0).padStart(2, '0'),
        seconds: String(duration.seconds ?? 0).padStart(2, '0'),
    };
};

export function CountdownTimer({
    targetDate,
    className,
    digitClassName = 'text-2xl md:text-3xl font-bold text-neon-yellow text-glow-neon-yellow', // Default neon style
    labelClassName = 'text-xs text-text-secondary uppercase tracking-wider', // Default label style
}: CountdownTimerProps) {
    const calculateTimeLeft = () => differenceInSeconds(targetDate, new Date());
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // Initial check in case the component mounts after the date has passed
        const initialSecondsLeft = calculateTimeLeft();
        setTimeLeft(initialSecondsLeft > 0 ? initialSecondsLeft : 0);

        if (initialSecondsLeft <= 0) return; // Don't start interval if already expired

        const intervalId = setInterval(() => {
            const secondsLeft = calculateTimeLeft();
            if (secondsLeft <= 0) {
                setTimeLeft(0);
                clearInterval(intervalId); // Clear interval when time runs out
            } else {
                setTimeLeft(secondsLeft);
            }
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [targetDate]); // Rerun effect only if targetDate changes

    const formattedTime = formatTimeLeft(timeLeft);
    const isExpired = timeLeft <= 0;

    return (
        <div className={cn("flex items-center justify-center space-x-3 md:space-x-4", className)} aria-live="polite">
            {isExpired ? (
                 <span className={cn("text-lg md:text-xl font-semibold text-cyber-pink text-glow-cyber-pink")}>
                    Event Started!
                 </span>
            ) : (
                <>
                    <div className="flex flex-col items-center">
                        <span className={digitClassName} aria-label={`${formattedTime.days} days`}>{formattedTime.days}</span>
                        <span className={labelClassName} aria-hidden="true">Days</span>
                    </div>
                    <span className={cn(digitClassName, "opacity-50")} aria-hidden="true">:</span>
                    <div className="flex flex-col items-center">
                        <span className={digitClassName} aria-label={`${formattedTime.hours} hours`}>{formattedTime.hours}</span>
                        <span className={labelClassName} aria-hidden="true">Hours</span>
                    </div>
                     <span className={cn(digitClassName, "opacity-50")} aria-hidden="true">:</span>
                    <div className="flex flex-col items-center">
                        <span className={digitClassName} aria-label={`${formattedTime.minutes} minutes`}>{formattedTime.minutes}</span>
                        <span className={labelClassName} aria-hidden="true">Mins</span>
                    </div>
                     <span className={cn(digitClassName, "opacity-50")} aria-hidden="true">:</span>
                    <div className="flex flex-col items-center">
                        <span className={digitClassName} aria-label={`${formattedTime.seconds} seconds`}>{formattedTime.seconds}</span>
                        <span className={labelClassName} aria-hidden="true">Secs</span>
                    </div>
                </>
            )}
        </div>
    );
}