import moment from 'moment'
export default  [
    {
        description: 'rent',
        note: 'housing',
        amount: 500,
        createdAt: moment(0).subtract(5, 'days'),
        id:1
    },
    {
        description: 'bread',
        note: 'food',
        amount: 400,
        createdAt: moment(0).add(5,'days'),
        id:2
    },{
        description: 'pan',
        note: 'food',
        amount: 1000,
        createdAt: moment(0),
        id:3
    }
]