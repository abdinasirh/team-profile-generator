// overall function to build employee website

//inside that function you'll have a function for each type of employee


const createManager = manager => {
    return `
    // ENTER HTML HERE
    <h1>${manager.getName()}</h1>
    <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
    
    
    
    `
}