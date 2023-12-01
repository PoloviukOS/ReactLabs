import React, { useState, useMemo, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const Parent = () => {
    const [salary, setSalary] = useState(2000);
    const [age, setAge] = useState(30);

    const incrementAge = useCallback(() => {
        setAge((prevAge) => prevAge + 5);
    }, []);

    const incrementSalary = useCallback(() => {
        setSalary((prevSalary) => prevSalary + 100);
    }, []);

    const memoizedTitle = useMemo(() => <Title />, []);
    const memoizedAgeDisplay = useMemo(() => <Display text="age" displayvalue={age} />, [age]);
    const memoizedSalaryDisplay = useMemo(() => <Display text="salary" displayvalue={salary} />, [salary]);
    const memoizedAgeButton = useMemo(() => <Button handleClick={incrementAge}>Update Age</Button>, [incrementAge]);
    const memoizedSalaryButton = useMemo(() => <Button handleClick={incrementSalary}>Update Salary</Button>, [incrementSalary]);

    return (
        <div>
            {memoizedTitle}
            {memoizedAgeDisplay}
            {memoizedAgeButton}
            {memoizedSalaryDisplay}
            {memoizedSalaryButton}
        </div>
    );
};

export default Parent;