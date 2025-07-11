import Image from 'next/image'
import React from 'react'

const Tools = () => {

    const tools = [
        { name: "Anaconda", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
        { name: "Angular", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
        { name: "Apple", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
        { name: "Astro", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
        { name: "Bootstrap", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Bamboo", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bamboo/bamboo-original.svg" },
        { name: "Bash", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "BitBucket", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        { name: "C", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Confluence", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
        { name: "C#", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "CSS", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Dart", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "DataGrip", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datagrip/datagrip-original.svg" },
        { name: "Debian", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" },
        { name: "Django", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Docker", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: ".NET", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Fast API", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Fedora", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" },
        { name: "Figma", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Firebase", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Flask", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Flutter", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Git", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Github", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Go", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Gradle", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg" },
        { name: "HTML", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Java", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Jira", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Kubernetes", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
        { name: "Laravel", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Linux", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Matplotlib", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "MongoDB", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Neovim", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg" },
        { name: "Nextjs", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
        { name: "Nodejs", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Numpy", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Oracle", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "Pandas", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "PHP", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "PostgreSQL", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Postman", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Putty", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg" },
        { name: "Python", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "React", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Rust", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
        { name: "Scikit-learn", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "SocketIO", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "Splunk", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/splunk/splunk-original-wordmark.svg" },
        { name: "Spring", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "SQL Developer", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg" },
        { name: "SQLite", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Svelte", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
        { name: "Swift", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "TailwindCSS", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Trello", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" },
        { name: "Typescript", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Ubuntu", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
        { name: "Vite", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        {name: "XML", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg"},
    ]

    return (
        <div className='flex flex-col justify-between'>
            <div className='text-center mb-10 mr-0 justify-center md:px-10'>
                <h2 className='text-3xl font-bold'>
                    Tools I am familiar with.
                </h2>
                <p className='text-xl font-bold'>I’ve applied these technologies in corporate environments, personal projects, and throughout my computer science degree.</p>
            </div>
            <div className="grid gap-6 w-full mx-auto md:mx-0 sm:gap-8 md:gap-12 items-center place-content-center"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))' }}>
                {tools.map((tool) => (
                    <div key={tool.name} title={tool.name} className='w-10 mx-auto flex items-center flex-col justify-center'>
                        <Image src={tool.pic} alt={tool.name} width={500} height={500} />
                        <p className='text-xs text-fun-gray font-bold mt-3 opacity-80'>{tool.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools