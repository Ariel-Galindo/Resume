import profilePicture from '../resume/images/profile-picture.jpg';
import '../resume/style.scss';

class Resume {
    render() {
        /* Creates an image */
        const img = document.createElement('img');
        img.src = profilePicture;
        img.alt = 'profile-picture.jpg';

        /* Creates a span with name */
        const name = document.createElement('span');
        name.innerHTML = 'Ariel Galindo';

        /* Creates two spans 1: Current Position and Previous Position */
        const currentPosition = document.createElement('a');
        currentPosition.href = '#business-analyst';
        currentPosition.innerHTML = 'Business Analyst';

        const previousPosition = document.createElement('a');
        previousPosition.href = '#application-oper-analyst';
        previousPosition.innerHTML = 'Application Oper. Analyst';

        const divPositions = document.createElement('div');
        divPositions.classList.add('positions-container');
        divPositions.appendChild(currentPosition);
        divPositions.appendChild(previousPosition);

        /* Inserts img and span into the img-container's div */
        const imgContainer = document.getElementById('img-container');
        imgContainer.appendChild(img);
        imgContainer.appendChild(name);
        imgContainer.appendChild(divPositions);
    }
}

export default Resume;