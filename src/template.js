

const createManager = manager => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${manager.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        </ul>

    </div>

</div>
    
    
    
    `
}