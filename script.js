// Image upload preview functionality
const imageInput = document.getElementById('imageUpload');
const profileImage = document.getElementById('profile-image');

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.onload = function (e) {
        profileImage.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
});

// PDF download functionality
const downloadButton = document.getElementById('download-pdf');
downloadButton.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get content from the resume
    const name = document.getElementById('name').textContent;
    const title = document.getElementById('title').textContent;
    const email = document.getElementById('email').textContent;
    const phone = document.getElementById('phone').textContent;
    const profile = document.getElementById('profile-info').textContent;
    const jobTitle = document.getElementById('job-title').textContent;
    const jobDate = document.getElementById('job-date').textContent;
    const jobTask1 = document.getElementById('job-task1').textContent;
    const jobTask2 = document.getElementById('job-task2').textContent;
    const jobTask3 = document.getElementById('job-task3').textContent;
    const skill1 = document.getElementById('skill1').textContent;
    const skill2 = document.getElementById('skill2').textContent;
    const skill3 = document.getElementById('skill3').textContent;
    const skill4 = document.getElementById('skill4').textContent;

    // Set up the PDF content
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(name, 20, 20);
    doc.setFontSize(16);
    doc.text(title, 20, 30);
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 20, 40);
    doc.text(`Phone: ${phone}`, 20, 50);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Profile", 20, 70);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(12);
    doc.text(profile, 20, 80);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Experience", 20, 100);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(jobTitle, 20, 110);
    doc.text(jobDate, 20, 120);
    doc.text(`- ${jobTask1}`, 20, 130);
    doc.text(`- ${jobTask2}`, 20, 140);
    doc.text(`- ${jobTask3}`, 20, 150);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Skills", 20, 170);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`- ${skill1}`, 20, 180);
    doc.text(`- ${skill2}`, 20, 190);
    doc.text(`- ${skill3}`, 20, 200);
    doc.text(`- ${skill4}`, 20, 210);

    // Save the PDF
    doc.save('resume.pdf');
});
