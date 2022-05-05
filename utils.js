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