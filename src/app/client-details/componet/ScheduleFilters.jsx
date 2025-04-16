"use client"
import React, { useState, useEffect, useRef } from 'react';

function FilterOption({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(title);
    const dropdownRef = useRef(null);
    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative text-xs" ref={dropdownRef}>
            <div
                className="flex items-center gap-1.5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-bold">{selected}</div>
                <i className="fa-solid fa-chevron-down text-[8px]"></i>
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded shadow-sm w-24">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-[11px]"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function ScheduleFilters() {
    const [activeDay, setActiveDay] = useState("Today");

    const days = ["Yesterday", "Today", "Tomorrow"];

    const handleChangeDay = (direction) => {
        const currentIndex = days.indexOf(activeDay);
        if (currentIndex === -1) return;
        const newIndex = direction === "left" ? Math.max(currentIndex - 1, 0) : Math.min(currentIndex + 1, days.length - 1);
        setActiveDay(days[newIndex]);
    };

    return (
        <div className="px-4 md:px-6 py-4 border-b border-[#EEEFF1]">
            <div className="flex flex-wrap items-center justify-between gap-4 max-[400px]:flex-col max-[400px]:items-start">
                <div className="flex max-[400px]:w-full gap-3">
                    <FilterOption title="Status" options={['Status', 'Pending', 'All']} />
                    <FilterOption title="Team" options={['Team', 'Alpha', 'Beta', 'All']} />
                </div>
                <div className="flex items-center gap-3 max-[400px]:w-full max-[400px]:justify-between max-[400px]:flex-wrap sm:flex-nowrap">
                    <FilterOption title="1 hour" options={['1 hour', '2 hour', '3 hour']} />
                    <FilterOption title="Day" options={['Day',]} />
                    <div className="flex items-center gap-1">
                        <button
                            className="bg-[#F4F4F5] w-6 h-6 flex items-center justify-center text-[10px]"
                            onClick={() => handleChangeDay("left")}
                        >
                            <i className="fa-solid fa-chevron-left text-[8px]"></i>
                        </button>
                        <span className="bg-[#F4F4F5] font-bold px-2 py-1 text-[12px]">
                            {activeDay}
                        </span>
                        <button
                            className="bg-[#F4F4F5] w-6 h-6 flex items-center justify-center text-[10px]"
                            onClick={() => handleChangeDay("right")}
                        >
                            <i className="fa-solid fa-chevron-right text-[8px]"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleFilters;


