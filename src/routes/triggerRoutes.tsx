import TeamImage from '../images/triggerImages/team.svg';
import LearningImage from '../images/triggerImages/learning.svg';
import WorldImage from '../images/triggerImages/world.svg'

export const TriggersList: ITriggers[] = [
    {
        title:"Досвідчена команда",
        description:"Лектори, які знають, що вам потрібно для відмінного закриття предмету",
        color:"green",
        image:TeamImage,
    },
    {
        title:"Будь-де та будь-коли",
        description:"Виберіть собі найпідходящий графік занять та займайтесь в любій точці світу",
        color:"red",
        image:WorldImage,
    },
    {
        title:"Інтерактивне навчання",
        description:"Переглядайте відеолекції, виконуйте практичні завдання",
        color:"blue",
        image:LearningImage,
    }
]