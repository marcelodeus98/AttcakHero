class Hero {
    constructor(name, age, type){
        this.name = name,
        this.age = age,
        this.type = type
    }

    Attack(){
        switch(this.type){
            case 'wizard':
                console.log('The wizard attacked using magic');
                break;
            case 'warrior':
                console.log('The warrior attacked using sword');
                break;
            case 'monk' :
                console.log('The monk attacked using martial arts');
                break;
            default:
                console.log('The ninja attacked using shuriken');
                break;
        }
    }
}

let heroOne = new Hero('Marcelo', 25, 'wizard');

heroOne.Attack();

