// Utility function to get dynamic years experience.
export function getYearsExperience(): string {
    const startDate = new Date('2018-09-01')
    const currentDate = new Date();
    const startYear = startDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const startMonth = startDate.getMonth();
    const currentMonth = currentDate.getMonth();

    let yearsExperience = currentYear - startYear;

    // Must decrement if a full year hasn't accrued.
    if (currentMonth < startMonth) {
        yearsExperience--;
    }

    return yearsExperience.toString();
}