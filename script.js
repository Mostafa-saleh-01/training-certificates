const searchInput =
    document.getElementById("certificateSearch");

const certificateGrid =
    document.getElementById("certificateGrid");

const noResults =
    document.getElementById("noResults");


function displayCertificates(list) {

    certificateGrid.innerHTML = "";


    if (list.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    list.forEach(certificate => {

        const card =
            document.createElement("div");

        card.className =
            "certificate-card";


        card.innerHTML = `

            <div class="certificate-image">

                <img
                    src="${certificate.image}"
                    alt="Certificate of ${certificate.name}"
                    loading="lazy"
                >

            </div>


            <div class="certificate-info">

                <span class="certificate-id">
                    ${certificate.id}
                </span>

                <h3>
                    ${certificate.name}
                </h3>

                <p>
                    ${certificate.course}
                </p>

                <p class="date">
                    ${certificate.date}
                </p>


                <div class="certificate-buttons">

                    <a
                        href="${certificate.image}"
                        target="_blank"
                        class="btn secondary small"
                    >
                        View
                    </a>


                    <a
                        href="${certificate.image}"
                        download
                        class="btn primary small"
                    >
                        Download
                    </a>

                </div>

            </div>

        `;


        certificateGrid.appendChild(card);

    });

}


searchInput.addEventListener(
    "input",
    function () {

        const search =
            this.value
                .toLowerCase()
                .trim();


        const filtered =
            certificates.filter(certificate =>

                certificate.name
                    .toLowerCase()
                    .includes(search)

                ||

                certificate.id
                    .toLowerCase()
                    .includes(search)

                ||

                certificate.course
                    .toLowerCase()
                    .includes(search)

            );


        displayCertificates(filtered);

    }
);


displayCertificates(certificates);