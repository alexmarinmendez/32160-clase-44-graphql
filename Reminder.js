class Reminder {
    constructor() {
        this.reminders = []
    }

    getReminders = () => {
        return this.reminders
    }

    createReminder = (data) => {
        if (this.reminders.length === 0) {
            data.id = 1
        } else {
            data.id = this.reminders[this.reminders.length-1].id + 1
        }
        data.status = "Pendiente"
        this.reminders.push(data)
        return data
    }

    completeReminders = (data) => {
        let index = this.reminders.findIndex(item => item.id === data.id)
        if (index !== -1) {
            this.reminders[index].status = "Completado"
            return this.reminders[index]
        } else {
            throw new Error('No reminder found')
        }
    }

    deleteReminders = () => {
        this.reminders = this.reminders.filter(item => item.status == "Pendiente")
        return this.reminders
    }
}

const reminder = new Reminder()
export default reminder