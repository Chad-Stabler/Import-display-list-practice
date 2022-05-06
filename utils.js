export function renderCandy(candy) {
    const container = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');

    container.classList.add('candy');

    imageEl.src = candy.image;

    textEl.textContent = `${candy.name} have a ${candy.consistency} consistency and a flavor score of ${candy.flavorScore}`;

    container.append(imageEl, textEl);
    return container;
}

export function renderBoss(boss) {
    const container = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');
    container.classList.add('boss');

    imageEl.src = boss.image;

    textEl.textContent = `${boss.name} is a boss found in ${boss.gameOfOrigin} and has attacks: ${boss.attacks}`;

    container.append(imageEl, textEl);

    return container;
}

export function renderCar(car) {
    const container = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');
    container.classList.add('car');

    imageEl.src = car.image;

    textEl.textContent = `The ${car.name} from ${car.manufacturer} is a beautiful super car with a ${car.topSpeed} mile per hour top speed!`;

    container.append(imageEl, textEl);

    return container;
}
