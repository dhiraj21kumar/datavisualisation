// https://observablehq.com/@xianwu/simple-force-directed-graph-network-graph@66
function _1(md){return(
md`# Simple Force-Directed Graph(Network graph)`
)}

function _2(md){return(
md`**d3-force** module implements a velocity Verlet numerical integrator for simulating physical forces on particles. The simulation is simplified: it assumes a constant unit time step Δt = 1 for each step, and a constant unit mass m = 1 for all particles. As a result, a force F acting on a particle is equivalent to a constant acceleration a over the time interval Δt, and can be simulated simply by adding to the particle’s velocity, which is then added to the particle’s position.

In the domain of information visualization, physical simulations are useful for studying **networks** and **hierarchies**!

more info: 
- https://www.d3indepth.com/force-layout/
- https://github.com/d3/d3-force 
`
)}

function _3(md){return(
md`-- SET UP --`
)}

function _d3(require){return(
require('d3@5')
)}

function _margin(){return(
{top: 30, right: 80, bottom: 30, left: 30}
)}

function _width(margin){return(
700 - margin.left - margin.right
)}

function _height(margin){return(
400 - margin.top - margin.bottom
)}

function _8(html){return(
html`
<style> 

.links line {
    stroke: #000;
    }

    .nodes circle {
    fill: pink;
    stroke: #000;
    }

    text {
    pointer-events: none;
    }

</style>`
)}

function _9(md){return(
md`To use this module, create a **simulation** for an array of nodes, and compose the desired forces. Then listen for tick events to render the nodes as they update in your preferred graphics system, such as Canvas or SVG.`
)}

function _simulation(d3,width,height){return(
d3.forceSimulation()
    .force("link", d3.forceLink() // This force provides links between nodes
                    .id(d => d.id) // This sets the node id accessor to the specified function. If not specified, will default to the index of a node.
     ) 
    .force("charge", d3.forceManyBody().strength(-500)) // This adds repulsion (if it's negative) between nodes. 
    .force("center", d3.forceCenter(width / 2, height / 2))
)}

function _myChart(html,d3,width,margin,height,simulation)
{
  const div = html`<div style='max-width: 900px; overflow-x: auto; padding: 0px; margin: 0px;'></div>`;
  
      const svg = d3.select(div)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
  
      //create dummy data
    const dataset =  {
      nodes: [
        {id: "Customer"},
        {id: "Vehicle"},
        {id: "Business Partner"},
        {id: "BP Name"},
        {id: "BP Number"},
        {id: "BP Category"},
        {id: "BP Type"},
        {id: "BP Group"},
        {id: "Contract Number"},
        {id: "VIN"},
        {id: "Contract Owner"},
        {id: "Contract A/C Number"},
        {id: "Contract"},
        {id: "Purchase Order"},
        {id: "PO Number"},
        {id: "Sales Order"},
        {id: "SO Number"},
        {id: "Asset Accounting"},
        {id: "Name"},
        {id: "Credit Rating"},
        {id: "Start Date"},
        {id: "End Date"},
        {id: "Maturity Date"},
        {id: "Dealer"},
        {id: "Dealer ID"},
        {id: "Code"},
        {id: "Loan"},
        {id: "Loan ID"},
        {id: "Loan Reference Number"},
        {id: "Asset"},
        {id: "Asset Number"},
        {id: "Category"},
        {id: "Make"},
        {id: "Customer ID"},
        {id: "Document"},
        {id: "Customer Data"},
        {id: "External Contract"},
        {id: "Contract ID"},
        {id: "Internal Contract"},
        {id: "Risk Calculation"},
        {id: "Confidence Level"},
        {id: "Contract Amount"},
        {id: "Scenario ID"},
        {id: "Catprdtype"},
        {id: "Agreement Number"},
        {id: "Invcusid"},
        {id: "Agreement Type"},
        {id: "Schedule Status"},
        {id: "Termin Months"},
        {id: "Status"},
        {id: "EoC Intention"},
        {id: "Expected End Date"},
        {id: "Trading Name"},
        {id: "Trading Number"},
        {id: "Customer State"},
        {id: "Vehicle Status"},
        {id: "Age"},
        {id: "Milage"},
        {id: "Lease Service"},
        {id: "Quotation Template"},
        {id: "Duration"},
        {id: "Distance"},
        {id: "Lease Price"},
        {id: "Purchase Option"},
        {id: "Financed Amount"},
        {id: "Customer Name"},
        {id: "Credit Application"},
        {id: "CA ID"},
        {id: "Customer Number"},
        {id: "Financial Statement ID"},
        {id: "Version"},
        {id: "Financial Analysis"},
        {id: "Rating Model ID"},
        {id: "Rating ID"},
        {id: "Rating Model"},
        {id: "Asset Type"},
        {id: "Contract Type"},
        {id: "Lessor ID"},
        {id: "Fk_Lessor"},
        {id: "Customer Group Name"},
        {id: "Customer Group Number"},
        {id: "Invoice"},
        {id: "Invoice Number"},
        {id: "Invoice Line Item"},
        {id: "Invoice Type"},
        {id: "Asset ID"},
        {id: "Invoice Date"},
        {id: "Estimated Discount Service Amount"},
        {id: "Credit Agency"},
        {id: "Agency Name"},
        {id: "Asset Details"},
        {id: "Chassis Number"},
        {id: "Audit"},
        {id: "Audit Number"},
        {id: "Title"},
        {id: "Year of Audit"},
        {id: "Audit Kind"},
        {id: "Author Name"},
        {id: "Risk Level"},
        {id: "Due Date"},
        {id: "Closing Date"},
        {id: "FollowUp Date"},
        {id: "Address"},
        {id: "Lease Agreement Number"},
        {id: "MB Order Number"},
        {id: "Lease Amount"},
        {id: "Type(New/Used/Demo)"},
        {id: "Contract Status"},
        {id: "Finance Type"},
        {id: "Role"},
        {id: "End of Contract Intention"},
        {id: "Expected End Date"},
        {id: "Lease Service"},
        {id: "Employee"},
        {id: "Emp ID"},
        {id: "Fuel Card ID"},
        {id: "Company ID"},
        {id: "Vehicle ID"},
        {id: "Invoice Header ID"},
        {id: "Mobility Contract ID"},
        {id: "Department ID"},
        {id: "Assignment"},
        {id: "Emp No"},
        {id: "Third Party ID"},
        {id: "Mobility Contract"},
        {id: "Invoice Ref"},
        {id: "Invoice Header"},
        {id: "Cost/Accounting Line"},
        {id: "Statement Of Account"},
        {id: "Tax Number"},
        {id: "Vehicle Group"},
        {id: "Rental Contract"},
        {id: "Eh Score"},
        {id: "Score"},
        {id: "Eh ID"},
        {id: "Customer "},
        {id: "Service"},
        {id: "CCID"}
      ], 
      links: [
        {source: "Customer", target: "Business Partner"},
        {source: "Customer", target: "Contract"},
        {source: "Customer", target: "Purchase Order"},
        {source: "Customer", target: "Sales Order"},
        {source: "Customer", target: "Asset Accounting"},
        {source: "Customer", target: "Dealer"},
        {source: "Customer", target: "Loan"},
        {source: "Customer", target: "Asset"},
        {source: "Customer", target: "Customer "},
        {source: "Customer", target: "Document"},
        {source: "Customer", target: "Risk Calculation"},
        {source: "Customer", target: "Vehicle"},
        {source: "Customer", target: "Lease Service"},
        {source: "Customer", target: "Credit Application"},
        {source: "Customer", target: "Financial Analysis"},
        {source: "Customer", target: "Rating Model"},
        {source: "Customer", target: "Invoice"},
        {source: "Customer", target: "Service"},
        {source: "Customer", target: "Credit Agency"},
        {source: "Customer", target: "Audit"},
        {source: "Customer", target: "Employee"},
        {source: "Customer", target: "Assignment"},
        {source: "Customer", target: "Mobility Contract"},
        {source: "Customer", target: "Invoice Header"},
        {source: "Customer", target: "Cost/Accounting Line"},
        {source: "Customer", target: "Statement Of Account"},
        {source: "Customer", target: "Rental Contract"},
        {source: "Customer", target: "Eh Score"},
        {source: "Business Partner", target: "BP Number"},
        {source: "Business Partner", target: "BP Category"},
        {source: "Business Partner", target: "BP Type"},
        {source: "Business Partner", target: "BP Group"},
        {source: "Business Partner", target: "Name"},
        {source: "Business Partner", target: "Credit Rating"},
        {source: "Contract", target: "Contract Number"},
        {source: "Contract", target: "VIN"},
        {source: "Contract", target: "Contract Status"},
        {source: "Contract", target: "Contract Owner"},
        {source: "Contract", target: "Contract A/C Number"},
        {source: "Contract", target: "Start Date"},
        {source: "Contract", target: "End Date"},
        {source: "Contract", target: "Maturity Date"},
        {source: "Contract", target: "Contract ID"},
        {source: "Contract", target: "Agreement Number"},
        {source: "Contract", target: "Agreement Type"},
        {source: "Contract", target: "External Contract"},
        {source: "Contract", target: "Internal Contract"},
        {source: "Contract", target: "Asset"},
        {source: "Contract", target: "Invcusid"},
        {source: "Contract", target: "Schedule Status"},
        {source: "Contract", target: "Termin Months"},
        {source: "Contract", target: "Status"},
        {source: "Contract", target: "EoC Intention"},
        {source: "Contract", target: "Expected End Date"},
        {source: "Contract", target: "CCID"},
        {source: "Contract", target: "Contract Type"},
        {source: "Contract", target: "Business Partner"},
        {source: "Contract", target: "BP Number"},
        {source: "Contract", target: "Lessor ID"},
        {source: "Contract", target: "Asset Details"},
        {source: "Contract", target: "Chassis Number"},
        {source: "Contract", target: "Dealer ID"},
        {source: "Contract", target: "Lease Agreement Number"},
        {source: "Contract", target: "MB Order Number"},
        {source: "Contract", target: "Dealer"},
        {source: "Contract", target: "Lease Amount"},
        {source: "Contract", target: "Duration"},
        {source: "Contract", target: "Status"},
        {source: "Contract", target: "Finance Type"},
        {source: "Purchase Order", target: "PO Number"},
        {source: "Sales Order", target: "SO Number"},
        {source: "Asset Accounting", target: "Asset Number"},
        {source: "Dealer", target: "Dealer ID"},
        {source: "Dealer", target: "Name"},
        {source: "Dealer", target: "Code"},
        {source: "Loan", target: "Loan ID"},
        {source: "Loan", target: "Loan Reference Number"},
        {source: "Asset", target: "Asset Number"},
        {source: "Asset", target: "Category"},
        {source: "Asset", target: "Make"},
        {source: "Asset", target: "Asset Type"},
        {source: "Asset", target: "Asset Details"},
        {source: "Customer ", target: "Customer ID"},
        {source: "Customer ", target: "VIN"},
        {source: "Customer ", target: "Credit Rating"},
        {source: "Customer ", target: "BP Number"},
        {source: "Customer ", target: "BP Name"},
        {source: "Customer ", target: "Trading Name"},
        {source: "Customer ", target: "Trading Number"},
        {source: "Customer ", target: "Customer State"},
        {source: "Customer ", target: "CCID"},
        {source: "Customer ", target: "Customer Number"},
        {source: "Customer ", target: "Fk_Lessor"},
        {source: "Customer ", target: "Customer Group Name"},
        {source: "Customer ", target: "Customer Group Number"},
        {source: "Customer ", target: "Name"},
        {source: "Customer ", target: "Address"},
        {source: "Customer ", target: "Role"},
        {source: "Customer ", target: "Tax Number"},
        {source: "Document", target: "Customer Data"},
        {source: "Risk Calculation", target: "Contract ID"},
        {source: "Risk Calculation", target: "Confidence Level"},
        {source: "Risk Calculation", target: "Type(New/Used/Demo)"},
        {source: "Risk Calculation", target: "Start Date"},
        {source: "Risk Calculation", target: "End Date"},
        {source: "Risk Calculation", target: "Contract Amount"},
        {source: "Risk Calculation", target: "Scenario ID"},
        {source: "Risk Calculation", target: "Catprdtype"},
        {source: "Vehicle", target: "Vehicle Status"},
        {source: "Vehicle", target: "VIN"},
        {source: "Vehicle", target: "Age"},
        {source: "Vehicle", target: "Milage"},
        {source: "Vehicle", target: "Type(New/Used/Demo)"},
        {source: "Lease Service", target: "Quotation Template"},
        {source: "Lease Service", target: "Duration"},
        {source: "Lease Service", target: "Distance"},
        {source: "Lease Service", target: "Lease Price"},
        {source: "Lease Service", target: "Purchase Option"},
        {source: "Lease Service", target: "Financed Amount"},
        {source: "Credit Application", target: "CA ID"},
        {source: "Credit Application", target: "CCID"},
        {source: "Credit Application", target: "Customer Number"},
        {source: "Financial Analysis", target: "CCID"},
        {source: "Financial Analysis", target: "Financial Statement ID"},
        {source: "Financial Analysis", target: "Version"},
        {source: "Financial Analysis", target: "Customer Number"},
        {source: "Rating Model", target: "CCID"},
        {source: "Rating Model", target: "Rating Model ID"},
        {source: "Rating Model", target: "Version"},
        {source: "Rating Model", target: "Rating ID"},
        {source: "Rating Model", target: "Customer Number"},
        {source: "Invoice", target: "Invoice Number"},
        {source: "Invoice", target: "Invoice Line Item"},
        {source: "Invoice", target: "Contract ID"},
        {source: "Invoice", target: "Invoice Type"},
        {source: "Invoice", target: "Asset ID"},
        {source: "Invoice", target: "Asset Type"},
        {source: "Invoice", target: "Invoice Date"},
        {source: "Service", target: "Estimated Discount Service Amount"},
        {source: "Credit Agency", target: "Agency Name"},
        {source: "Audit", target: "Audit Number"},
        {source: "Audit", target: "Title"},
        {source: "Audit", target: "Year of Audit"},
        {source: "Audit", target: "Audit Kind"},
        {source: "Audit", target: "Author Name"},
        {source: "Audit", target: "Risk Level"},
        {source: "Audit", target: "Due Date"},
        {source: "Audit", target: "Closing Date"},
        {source: "Audit", target: "FollowUp Date"},
        {source: "Employee", target: "Emp ID"},
        {source: "Employee", target: "Fuel Card ID"},
        {source: "Employee", target: "Company ID"},
        {source: "Employee", target: "Vehicle ID"},
        {source: "Employee", target: "Invoice Header ID"},
        {source: "Employee", target: "Mobility Contract ID"},
        {source: "Employee", target: "Department ID"},
        {source: "Assignment", target: "Emp ID"},
        {source: "Assignment", target: "Fuel Card ID"},
        {source: "Assignment", target: "Company ID"},
        {source: "Assignment", target: "Emp No"},
        {source: "Mobility Contract", target: "Emp ID"},
        {source: "Mobility Contract", target: "Third Party ID"},
        {source: "Mobility Contract", target: "Department ID"},
        {source: "Mobility Contract", target: "Vehicle ID"},
        {source: "Invoice Header", target: "Invoice Ref"},
        {source: "Invoice Header", target: "Third Party ID"},
        {source: "Cost/Accounting Line", target: "Emp ID"},
        {source: "Cost/Accounting Line", target: "Company ID"},
        {source: "Cost/Accounting Line", target: "Mobility Contract ID"},
        {source: "Cost/Accounting Line", target: "Department ID"},
        {source: "Cost/Accounting Line", target: "Vehicle ID"},
        {source: "Cost/Accounting Line", target: "Invoice Header ID"},
        {source: "Rental Contract", target: "Contract ID"},
        {source: "Rental Contract", target: "Contract Type"},
        {source: "Rental Contract", target: "Business Partner"},
        {source: "Rental Contract", target: "Vehicle Group"},
        {source: "Eh Score", target: "Eh ID"},
        {source: "Eh Score", target: "Score"},
        {source: "Eh Score", target: "Customer ID"}
      ]
    };

    console.log("dataset is ...",dataset);

     // Initialize the links
    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(dataset.links)
      .enter().append("line");

    // Initialize the nodes
    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(dataset.nodes)
      .enter().append("circle")
        .attr("r", 20)
        .call(d3.drag()  //sets the event listener for the specified typenames and returns the drag behavior.
            .on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
            .on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
            .on("end", dragended)     //end - after an active pointer becomes inactive (on mouseup, touchend or touchcancel).
         );

    // Text to nodes
    const text = svg.append("g")
        .attr("class", "text")
        .selectAll("text")
        .data(dataset.nodes)
      .enter().append("text")
        .text(d => d.id)

    //Listen for tick events to render the nodes as they update in your Canvas or SVG.
    simulation
        .nodes(dataset.nodes)//sets the simulation’s nodes to the specified array of objects, initializing their positions and velocities, and then re-initializes any bound forces;
        .on("tick", ticked);//use simulation.on to listen for tick events as the simulation runs.
        // After this, Each node must be an object. The following properties are assigned by the simulation:
        // index - the node’s zero-based index into nodes
        // x - the node’s current x-position
        // y - the node’s current y-position
        // vx - the node’s current x-velocity
        // vy - the node’s current y-velocity

    simulation.force("link")
        .links(dataset.links);//sets the array of links associated with this force, recomputes the distance and strength parameters for each link, and returns this force.
        // After this, Each link is an object with the following properties:
        // source - the link’s source node; 
        // target - the link’s target node; 
        // index - the zero-based index into links, assigned by this method


    // This function is run at each iteration of the force algorithm, updating the nodes position (the nodes data array is directly manipulated).
    function ticked() {
      link.attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x)
          .attr("cy", d => d.y);

      text.attr("x", d => d.x - 5) //position of the lower left point of the text
          .attr("y", d => d.y + 5); //position of the lower left point of the text
    }

    //When the drag gesture starts, the targeted node is fixed to the pointer
    //The simulation is temporarily “heated” during interaction by setting the target alpha to a non-zero value.
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();//sets the current target alpha to the specified number in the range [0,1].
      d.fy = d.y; //fx - the node’s fixed x-position. Original is null.
      d.fx = d.x; //fy - the node’s fixed y-position. Original is null.
    }

    //When the drag gesture starts, the targeted node is fixed to the pointer
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    //the targeted node is released when the gesture ends
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      
      console.log("dataset after dragged is ...",dataset);
    }
       return div
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("width")).define("width", ["margin"], _width);
  main.variable(observer("height")).define("height", ["margin"], _height);
  main.variable(observer()).define(["html"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("simulation")).define("simulation", ["d3","width","height"], _simulation);
  main.variable(observer("myChart")).define("myChart", ["html","d3","width","margin","height","simulation"], _myChart);
  return main;
}
