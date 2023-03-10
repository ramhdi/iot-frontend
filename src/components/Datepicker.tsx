import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { DropdownOption } from "./Dropdown";

interface DatepickerInputParams {
  onChange(datetime: Date): void
}

function generateYears(): DropdownOption[] {
  let result: DropdownOption[] = [];
  for (let i = 2023; i >= 2000; i--) {
    result.push({
      label: String(i),
      value: String(i)
    })
  }
  return result;
}

function generateMonths(): DropdownOption[] {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let result: DropdownOption[] = months.map((month, index) => {
    return {
      value: String(index),
      label: month
    };
  });
  return result;
}

function generateDates(year: number, month: number): DropdownOption[] {
  let maxDates = [
    31,
    ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0) ? 29 : 28),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  let dates: DropdownOption[] = [];
  for (let i = 1; i <= maxDates[month]; i++) {
    dates.push({ value: String(i), label: String(i) });
  }

  return dates;
}

function generateHMS(type: 'h' | 'm' | 's'): DropdownOption[] {
  let maxVal: number;
  switch(type) {
    case 'h':
      maxVal = 24;
      break;

    case 'm':
      maxVal = 60;
      break;
    
    case 's':
      maxVal = 60;
      break;
  }

  let result: DropdownOption[] = [];
  for(let i = 0; i < maxVal; i++) {
    let label = (i < 10 ? '0' + i : '' + i);
    result.push({
      label: label,
      value: String(i)
    });
  }
  return result;
}

export default function Datepicker(params: DatepickerInputParams) {
  const [datetime, setDateTime] = useState(new Date());
  const [year, setYear] = useState(String(datetime.getFullYear()));
  const [month, setMonth] = useState(String(datetime.getMonth()));
  const [date, setDate] = useState(String(datetime.getDate()));
  const [hour, setHour] = useState(String(datetime.getHours()));
  const [minute, setMinute] = useState(String(datetime.getMinutes()));
  const [second, setSecond] = useState(String(datetime.getSeconds()));

  useEffect(() => {
    let newdate = new Date(0);
    newdate.setFullYear(parseInt(year));
    newdate.setMonth(parseInt(month));
    newdate.setDate(parseInt(date));
    newdate.setHours(parseInt(hour));
    newdate.setMinutes(parseInt(minute));
    newdate.setSeconds(parseInt(second));
    setDateTime(newdate);
  }, [year, month, date, hour, minute, second]);
  return (
    <div>
      <Dropdown value={year} label="Start: " options={generateYears()} onChange={(_yy) => setYear(_yy)} />
      <Dropdown value={month} label="&nbsp;" options={generateMonths()} onChange={(_mm) => setMonth(_mm)} />
      <Dropdown value={date} label="&nbsp;" options={generateDates(parseInt(year), parseInt(month))} onChange={(_dd) => setDate(_dd)} />
      <Dropdown value={hour} label="&nbsp;&nbsp;&nbsp;" options={generateHMS('h')} onChange={(_hh) => setHour(_hh)} />
      <Dropdown value={minute} label=":" options={generateHMS('m')} onChange={(_mm) => setMinute(_mm)} />
      <Dropdown value={second} label=":" options={generateHMS('s')} onChange={(_ss) => setSecond(_ss)} />
      {String(datetime)}
    </div>
  );
}