var english = {
    scriptorium:"Y's Scriptorium",
    my_name:"Yutian",
    my_job:"Developer",
    computer_Science:"Computer Science",
    BEng_civil:"B.Eng. Civil",
    about_me:
        "This site is developed by me using bootstrap.<br>It is for demonstrating my personal projects.<br>",
    email_btn:"My Email",
    git_btn:"My Github",
    linkedin_btn:"My Linkedin",
    go_project_btn:"Go to project",
    go_repositories_btn:"Go to repositories",
    project_covid19:"Covid19 happens when I lived in montreal. Initially, sante montreal only provided covid cases in each borough, and I was taking these data to Excel everyday to figure out which area is the most dangerous area. Then I realized I can make it automatic by web scraping, so I started this project.<br>After I have enough data, I expand the project with some simple web UI."
};

var chinese = {
    scriptorium:"玉田的写字室",
    my_name:"玉田",
    my_job:"程序员",
    computer_Science:"计算机科学专业文凭",
    BEng_civil:"土木工学学士",
    about_me:"这个网页是我用bootstrap写的，<br>用于展示我闲暇时间里做的小项目.<br>",
    email_btn:"我的Email",
    git_btn:"我的Github",
    linkedin_btn:"我的Linkedin",
    go_project_btn:"项目展示",
    go_repositories_btn:"存储库",
    project_covid19:"新冠爆发时我住在蒙特利尔市．一开始，市政府只给出每个行政区的确诊人数，我每天会把这些数据拷贝到Excel里去分析哪个地区更危险。之后，我意识到我可以把网页上的数据爬下来，自动化整个过程，于是就开始着手这个项目。在完成数据收集之后，我加上了网页来方便浏览。"
};


$(document).ready(function() {
    $("#translation :input").change(translation);
});

function translation()  {
    var script_file = window[this.value];

    $('title').text(script_file.scriptorium);
    $("#scriptorium").text(script_file.scriptorium);
    $("#my_name").text(script_file.my_name);
    $("#my_job").text(script_file.my_job);
    $("#computer_Science").text(script_file.computer_Science);
    $("#BEng_civil").text(script_file.BEng_civil);
    $("#about_me").html(  script_file.about_me );
    $("#email_btn").text(script_file.email_btn);
    $("#git_btn").text(script_file.git_btn);
    $("#linkedin_btn").text(script_file.linkedin_btn);
    $("#go_project_btn").text(script_file.go_project_btn);
    $("#go_repositories_btn").text(script_file.go_repositories_btn);
    $("#project_covid19").html(  script_file.project_covid19 );


};
