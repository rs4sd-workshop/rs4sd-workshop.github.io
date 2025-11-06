import React from "react";
import "./Schedule.scss";

const ScheduleRow = ({ time, session, subsession, type }) => {
    const getRowClassName = () => {
        switch (type) {
            case "keynote-header":
            case "session-header":
                return "schedule-row header-row";
            case "break":
                return "schedule-row break-row";
            case "keynote":
                return "schedule-row keynote-row";
            case "paper":
                return "schedule-row paper-row";
            default:
                return "schedule-row general-row";
        }
    };

    // For header rows without time column
    if (!time) {
        return (
            <tr className={getRowClassName()}>
                <td colSpan="2" className="session-cell">
                    <strong>{session}</strong>
                </td>
            </tr>
        );
    }

    return (
        <tr className={getRowClassName()}>
            <td className="time-cell">
                <strong>{time}</strong>
            </td>
            <td className="session-cell">
                {session}
                {subsession && (
                    <>
                        <br />
                        <span className="subsession">By {subsession}</span>
                    </>
                )}
            </td>
        </tr>
    );
};

const Schedule = ({ date, scheduleItems }) => {
    return (
        <div className="schedule-container">
            <h3 className="schedule-date">
                <strong>Time: {date}</strong>
            </h3>

            <div className="table-container">
                <table className="table is-fullwidth is-striped schedule-table">
                    <thead>
                        <tr>
                            <th className="time-header">Time</th>
                            <th className="session-header">Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleItems.map((item, index) => (
                            <ScheduleRow
                                key={index}
                                time={item.time}
                                session={item.session}
                                subsession={item.subsession}
                                type={item.type}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedule;

