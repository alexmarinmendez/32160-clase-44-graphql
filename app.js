import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import reminder from './Reminder.js'

const app = express()

let schema = buildSchema(`
    type Reminder {
        id: Int
        title: String
        description: String
        status: String
    }

    type Query {
        reminders: [Reminder]
    }

    type Mutation {
        createReminder(title: String, description: String): Reminder
        deleteReminder: [Reminder]
        completeReminder(id: Int): Reminder
    }
`)

const root = {
    reminders: () => reminder.getReminders(),
    createReminder: (data) => reminder.createReminder(data),
    deleteReminder: () => reminder.deleteReminders(),
    completeReminder: (id) => reminder.completeReminders(id) 
}

app.use('/api', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Server Up'))