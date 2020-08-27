//tooggle mobile navbar 
const toggle_menu = () =>{
    $('.mobile_nav').toggleClass('mobile_nav--active');
}
const open_resume =() =>{
    document.querySelector('.main_section .mycv_section .social_links').style.display = 'none';
    document.querySelector('.main_section .skill_work_section').style.display = 'none';
    document.querySelector('.main_section .resume_body').style.display = 'block';
}
const close_resume =() =>{
    document.querySelector('.main_section .mycv_section .social_links').style.display = 'flex';
    document.querySelector('.main_section .resume_body').style.display = 'none';
    document.querySelector('.main_section .skill_work_section').style.display = 'block';
}
const scrollToTop =() =>{
    close_resume();
    document.querySelector('.mywork_section').scrollIntoView(true); // Top
}