document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const musicIntroPage = document.getElementById('music-intro-page');
    const fullPageLetter = document.getElementById('full-page-letter');

    const openIntroBtn = document.getElementById('open-intro-btn');
    const openLetterBtn = document.getElementById('open-letter-btn');
    
    const letterTextElement = document.getElementById('letter-text');
    const petalContainer = document.querySelector('.petal-container');
    
    const letterContent = `
    Un mes.. Si pasa volando el tiempo y a sido algo increíble, tenerte a mi lado el conocerte tan de cerca a sido algo de
    lo mas hermoso en este tiempo, tu curiosa preguntando cositas sobre mi y yo también demostrando el mismo interés en 
    conocerte fueron pasos cortos pero largos a la vez, tan natural.. tan único entre nosotros que lo hace muy bonito de 
    contar luego comenzar a vernos en persona tener mas cercanía, el como tu amigas nos daban espacio esa primera vez que 
    nos vimos, además de que bueno que de esa vez hace mucho no tenia una charla tan cálida con alguien.. ya luego vino esa 
    semanita tan piola de vernos a lo que se pudiera acompañarte, compartir más en persona, fue algo que de apoco nos acerco más 
    y más. Tu tan nerviosa cuando me pediste un abrazo y yo también tan nervioso que no sabia que hablar o como comentarlo, me 
    comía mi propia lengua, el tiempo paso, tuvimos sus roces.. sus charlas densas, pesadas pero las pudimos conversar, buscarle 
    una solución, arreglar lo que fallaba o dar en cuenta que fallo, lo cual también es muy bonito porque no dejamos que lo que 
    se estaba creando muriera tan fácil, aunque bueno tu me dabas tantas alternativas de que podía alejarme el escapar de la situación 
    pero yo no soy así, preferí arreglar y quedarme contigo.. mantener vivo lo nuestro aun continuando por mucho tiempo a tu lado, vi 
    tu valor como persona, como mujer y como compañera. Te amo. Al inicio si era bien serio pero de apoco me fui soltando mostrando mas 
    de mi para ti, por que es algo que quiero además es regular algo para bien porque como esta bien claro no somos adivinos. Amo el como 
    eres, cada detalle de ti, fuera de lo físico.. Tu personalidad tan prendida, Tu amabilidad, tus modales, tu exigencia 
    (aunque se pase un poco), tu ganas de siempre llevar todo adelante, el dar tu máximo esfuerzo en cada cosita de ti.. Muchos proyectos a futuro, 
    Tantos planes, tantas ideas que si me lo permites quiero apoyarte y acompañarte en ellas.. Ayudarte con puntos de vista, opiniones, ideas 
    complementarias aunque bueno nuestros gustos sean diferentes no significa que no complementemos uno con el otro. Ahora con lo físico.. Tienes 
    una carita hermosa, me encanta verte a los ojos.. ese pelito largo tan hermoso y ondulado un poquito, tu curva mas hermosa tu sonrisa, tu cuerpo 
    en general me encanta.. es tan suave, tan delicado, que me hace cuidarlo mucho.. y no por breve tiempo, si no que mucho más, permíteme amarte por 
    mucho tiempo, estar ahí en los buenos momentos, en los malos, pero estar contigo.. permíteme ser tu acompañante por toda la vida si es posible.. 
    te quiero y amo que estés a mi lado, tantas proyecciones que me hacen construir un buen hogar contigo, si hay problemas buscar siempre solucionarlo, 
    mantener viva la monogamia y el amor verdadero entre nosotros.. en la cita del museo de bellas artes, fue cada detalle hermoso, una cita esplendida, 
    cálida y tan acogedora, verte disfrutar las pinturas.. disfrutarlas juntos, las estatuas la infraestructura y todo.. pero juntos que es lo mas hermoso. 
    Hemos cumplido un mes, el pasado 10 te propuse pololeo, yo super nervioso, porque bueno después me di cuenta que te sentías presionada, pero que me digeras 
    que de igual manera fue lindo y que no te lo esperabas, me alivio mi pesar de culpa por presionarte de esa manera.. Te amo. Y quiero darte toda mi atención, amor, detalles, 
    tiempo para ti. Porque? por que lo vales completamente, por todo lo que se de ti y valoro. Te adoro, te amo y te deseo.. puedo a ver sido mejor este cumple mes pero sabes las 
    circunstancias de estar tan lejos, siendo que nos queremos tan cerca por toda la seguridad y calma.. pero tenemos que aguantar y ya a futuro vivir juntos, en ves de decir 
    "Te dejo en el metro"; "Te dejo en estación central", decirnos "Vamos a casa"; "que falta por comprar para la casa".. queda mucho por delante, nuevos días juntos, nuevas 
    citas, tiempo a solas, momentos de amor intimo juntos.. mucho. Primer mes juntos mi amor, mi niña, mi princesa, mi mujer, mi polola, mi compañera, mi vida, mi bebe, mi 
    hermosa mujer.. Te amo mucho mucho.. Numero 8 dado vuelta es igual a infinito como mi amor por ti.

    En el viaje del amor, los miedos son la brújula que señala los desafíos, mientras que los desacuerdos fortalecen el puente de la comprensión, llevándonos hacia la felicidad y la calma.

    - Francisco, Tu bebe :)
    `;

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petalContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }
    
    setInterval(createPetal, 500);

    // Evento para ir de la página de inicio al aviso de la música
    openIntroBtn.addEventListener('click', () => {
        landingPage.classList.remove('active');
        setTimeout(() => {
            musicIntroPage.classList.add('active');
        }, 1000);
    });

   // Evento para ir del aviso de la música a la carta
    openLetterBtn.addEventListener('click', () => {
        musicIntroPage.classList.remove('active');
        setTimeout(() => {
            fullPageLetter.classList.add('active');
            // Aquí cargamos el texto una vez que la página ya es visible
            letterTextElement.textContent = letterContent;
        }, 1000);
    });

    function typeWriter(text, element, delay) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }
});