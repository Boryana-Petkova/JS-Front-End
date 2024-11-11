function meetingAppointments(input) {
    const meetings = {};

    for (const entry of input) {
        const [day, name] = entry.split(' ');

        if (!meetings[day]){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
            
        } else {
            console.log(`Conflict on ${day}!`);
        }
        
    }
    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
        
    }

}
meetingAppointments(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );