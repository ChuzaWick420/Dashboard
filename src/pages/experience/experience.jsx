import React, { useEffect, useState } from "react";

import "./experience.css";

function Experience() {

  //JSON filtered format

  //sample
  /*
  data = [
    {
      "company_name": String,
      "joinings": [Number],
      "leave": [Number],
      "timeline": [
        {
          "year": Number,
          "roles": [String],
          "projects": [
            {
              "name": String,
              "url": String,
              "overview": [String]
            },
            {},
            {}
          ]
        },
        {},
        {}
      ]
    },
    {},
    {}
  ]
  */

    const [page, setPage] = useState(<></>);

    useEffect(()=>{
        //sends request

        //translates data into acceptable format
        let data = [
          {
            "company_name": "Company_A",
            "joinings": [2021, 2023],
            "leaves": [2022],
            "timeline": [
              {
                "year": 2021,
                "roles": ["web_dev", "game_dev"],
                "projects": [
                  {
                    "name": "Articles_Web",
                    "url": "https://github.com/ChuzaWick420/Articles_Web",
                    "overview": [
                        "Practiced React",
                        "Learnt about gradient text"
                    ]
                  }
                ]
              },
              {
                "year": 2022,
                "roles": ["web_dev"],
                "projects": [
                    {
                        "name": "Weather_APP",
                        "url": "https://github.com/ChuzaWick420/weather-app",
                        "overview": [
                            "Tried to practice responsiveness but failed",
                            "Learnt about APIs"
                        ]
                    }
                ]
              },
              {
                "year": 2023,
                "roles": ["web_dev"],
                "projects": [
                    {
                        "name": "play_store_clone",
                        "url": "https://github.com/ChuzaWick420/play_store_clone",
                        "overview": [
                            "Tried to learn collaboration on github"
                        ]
                    }
                ]
              },
              {
                "year": 2024,
                "roles": ["game_dev", "web_dev"],
                "projects": [
                    {
                        "name": "Dodge_em",
                        "url": "https://github.com/waseem087/Dodge-em",
                        "overview": [
                            "Learnt about software design",
                            "Learnt about OOP"
                        ]
                    },
                    {
                        "name": "discord_clone",
                        "url": "https://github.com/ChuzaWick420/discord_clone",
                        "overview": [
                            "Learnt CSS"
                        ]
                    }
                ]
              }
            ]
          },
          {
            "company_name": "Company_B",
            "joinings": [2022],
            "leaves": [2023],
            "timeline": [
              {
                "year": 2022,
                "roles": ["game_dev"],
                "projects": [
                  {
                    "name": "2D-Platformer",
                    "url": "https://github.com/ChuzaWick420/2D-Platformer-Game",
                    "overview": [
                        "Learnt a lot about tile maps and games in general",
                        "Learnt about hitboxes",
                        "Learnt about physics",
                        "Learnt about gameloops and animations"
                    ]
                  },
                ]
              },
              {
                "year": 2023,
                "roles": ["game_dev"],
                "projects": [
                  {
                    "name": "FlappyBird",
                    "url": "https://github.com/ChuzaWick420/Flappy-Bird-Recreation",
                    "overview": [
                        "Made a fully working game"
                    ]
                  },
                ]
              }
            ] 
          }
        ];

        //figure out how many company_cards the page contains
        let company_cards_count = 0;
        let joinings = [];
        // let leaves = [];

        for (let i = 0; i < data.length; i++) {
            const company = data[i];
            company_cards_count += company["joinings"].length;

            for (let j = 0; j < company["joinings"].length; j++) {
                joinings.push(company["joinings"][j]);
            }

            // for (let z = 0; z < company["leaves"].length; z++){
                // leaves.push(company["leaves"][z]);
            // }
        }

        //sort in descending order
        joinings.sort((a, b)=>{return (b - a);});
        // leaves.sort((a, b)=>{return (b - a);});

        let ProjectsLinks = (props) => {
            let links = [];
            for (let i = 0; i < props.links.length; i++) {
                links.push(
                    <li key={i}>
                        <a href={props.links[i]["url"]} target="_blank">
                            <div className="list_item_container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                                <p>{props.links[i]["display_text"]}</p>
                            </div>
                        </a>
                    </li>
                );
            }

            return links;

        };

        let ProjectsOverview = (props) => {
            
            let overviews = [];

            for (let i = 0; i < props.overviews.length; i++) {
                overviews.push(
                    <li key={i}>
                        <div className="list_item_container">
                            <div className="bullet"></div>
                            <p>{props.overviews[i]}</p>
                        </div>
                    </li>
                );
            }

            return overviews;
        };

        let TimeLineCard = (props)=>{
            return (
                <div className="timeline_card_container">
                    <div className="timeline_progress"></div>
                    <div className="timeline_card">
                        <h3>{props.header}</h3>
                        <ul className="projects">
                            <ProjectsLinks links={props.links} />
                        </ul>
                        <ul className="experience_points">
                            <ProjectsOverview overviews={props.content} />
                        </ul>
                    </div>
                </div>
            );
        };
        
        let major_containers = [];

        //append the category_container
        for (let i = 0; i < company_cards_count; i++) {

            let minor_cards_count = 0;
            let minor_cards = [];

            //Task 1: determine currently which major card is being processed
            //Solution attempt: what if we extract joinings from all companies, sort in descending order, iterate over em, find which company that joining belongs to = current major card
            //Task 2: determine how many minor cards current major card has
            let company_index = -1;

            //first major card is where person is currently working
            //there are 2 types of companies
            //current company (where num of leaves and joinings are off by 1)
            //historic companies (where num of leaves and joinings are same)

            let TimeLineHistory = (props)=>{
                return (
                    <div className="timeline_history">
                        <div className="bullet"></div>
                        <div className="timeline_extension"></div>
                        <p>{props.date}</p>
                    </div>
                );
            };
        
            let TimeLine = (props)=>{
                //roles duplication fix
                let role_list = "";

                let roles_count = props.roles.length;

                for (let j = 0; j < roles_count; j++){
                    role_list += props.roles[j];
                    if (j + 1 == roles_count)
                        role_list += "";
                    else
                        role_list += ", ";
                }
                
                let links_list = [];
                let overview_list = [];

                let num_of_projects = props.projects.length;

                for (let j = 0; j < num_of_projects; j++) {
                    links_list.push({
                        "display_text": props.projects[j]["name"],
                        "url": props.projects[j]["url"]
                    });
                    overview_list.push(props.projects[j]["overview"]);
                }

                return (
                    <div className="timeline">
                        <TimeLineHistory date={props.year} />
                        <TimeLineCard header={role_list} links={links_list} content={overview_list.flat()} />
                    </div>
                );
            };
            
            // let breaking_year = -1;

            if (i == 0) {
                //go through all companies
                for (let j = 0; j < data.length; j++) {
                    let joins = data[j]["joinings"].length;
                    let leaves = data[j]["leaves"].length;

                    if (joins != leaves) {
                        //this is a current company
                        company_index = j;
                        break;
                    }
                }

                //after 1st company is found read from latest history till it's highest joining
                let timeline = data[company_index]["timeline"]; 
                
                for (let j = timeline.length - 1; j >= 0; j--) {

                    let current_year = timeline[j]["year"];
                    let joining = data[company_index]["joinings"];

                    if (current_year < joining[joining.length - 1]) {
                        // breaking_year = current_year;
                        break;
                    }

                    //push minor cards into current major card
                    minor_cards.push(
                        <TimeLine key={j} year={current_year} roles={timeline[j]["roles"]} projects={timeline[j]["projects"]} />
                    );
                }
            }
 
            let TimeLineContainer = ()=>{
                return (
                    <div className="timeline_container">
                        {minor_cards}
                        <div className="bullet"></div>
                    </div>
                );
            };

            major_containers.push(
                <div key={i} className="category_container">
                    <h1 className="important_text">Company Name</h1>
                    <TimeLineContainer />
                </div>
            );
        }

        setPage(
            <div className="experience_container">
                {major_containers}
            </div>
        );

    }, []);
    
    //return the page after the useEffect

    const [projectsList, setProjectsList] = useState(null);
    const [experienceList, setExperienceList] = useState(null);

    useEffect(()=>{
        let project_list = [
            "https://github.com/ChuzaWick420/2D-Platformer-Game",
            "https://github.com/ChuzaWick420/Flappy-Bird-Recreation"
        ];

        let xp_list = [
            "Learnt how to make a 2d platformer game, implemented hitboxes, levels, character movement and gravity.",
            "Created a flappy bird clone. There is a series of pipes which move right to left and player presses spacebar to dodge em."
        ];

        let project_links = [];

        for (let project of project_list) {
            project_links.push(
                <li key={project_list.indexOf(project)}>
                    <a href={project} target="_blank">
                        <div className="list_item_container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            <p>{project.substring(19)}</p>
                        </div>
                    </a>
                </li>
            );
        }

        let experience_list = [];

        for (let xp of xp_list) {
            experience_list.push(
                <li key={xp_list.indexOf(xp)}>
                    <div className="list_item_container">
                        <div className="bullet"></div>
                        <p>{xp}</p>
                    </div>
                </li>
            );
        }

        setProjectsList(project_links);
        setExperienceList(experience_list);

    }, []);

    let TimeLineCard = (props)=>{
        return (
            <div className="timeline_card_container">
                <div className="timeline_progress"></div>
                <div className="timeline_card">
                    <h3>{props.header}</h3>
                    <ul className="projects">
                        {projectsList}
                    </ul>
                    <ul className="experience_points">
                        {experienceList}
                    </ul>
                </div>
            </div>
        );
    };

    let TimeLineHistory = (props)=>{
        return (
            <div className="timeline_history">
                <div className="bullet"></div>
                <div className="timeline_extension"></div>
                <p>{props.date}</p>
            </div>
        );
    };

    let TimeLine = ()=>{
        return (
            <div className="timeline">
                <TimeLineHistory date={"2020"} />
                <TimeLineCard header={"Front End dev"} content={"Hello"} />
            </div>
        );
    };

    let TimeLineContainer = ()=>{
        return (
            <div className="timeline_container">
                <TimeLine />
                <div className="bullet"></div>
            </div>
        );
    };

    // return (
        // <div className="experience_container">
            {/* <div className="category_container"> */}
                {/* <h1 className="important_text">Company Name</h1> */}
                {/* <TimeLineContainer /> */}
            {/* </div> */}
        {/* </div> */}
    // );

    return (
        <>
            {page}
        </>
    );
}

export default Experience;
