import "./App.css";
import DashboardList from "remote/DashboardList";

const content = [
  {
    title: "Add Project",
    text: `First, add a project that you
        would like to work on.`,
    value: "$22k",
  },
  {
    title: "Add Issue ",
    text: `Finally, add issues that you would like to work on.`,
    value: "$10k",
  },
  {
    title: "Total Projects ",
    text: `The project key is a unique identifier for a project.`,
    value: "15",
  },
  {
    title: "Ongoing  ",
    text: `You've probably heard of a project post-mortem.`,
    value: "03",
  },
];

function App() {
  return (
    <>
      <div className="dashboard-ontainer">
        <div className="flex">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIALkAsAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBQECBAYA/9oACAEBAAAAANFRji5SF0GDeYj3g6PUTWiLzpMc14oP0+rasjTWKM7g0e97IO4i2j0zRMEmx1b1YinFW0SxYz4lJQ6SPPerEQPjNYM5OzqIpRrt+uR2p70U5ST4tPVkzViVB3dAG9W9Ko1PSc/q6QGFlFufbtUqvW49PqYFPRDw6joXeq3OdRl5nP5s1WORoGO5fzmjYqY9MCd2XmXKt9eL4uTZucKDXQPSMZPFQkj1ppg52zDcswU1dDe+ik3iJ9AlKKvt2paR/q1Drk1GiKUvRX5N7d7D07Vce2dexNFIGuSV6DYsWeeN/ZfVm95iKhEruMGdo1pK7exxVPa3q548aOcxT04PaQtzotswGD7l6lnUfK07HmXh8HTXT6qe9nbhOl38tuxNddSps/T7V7D1a8u82+W60Grb6Rp1hbdsK9Kr1+5pi8seoHoRJ1zF8r6G4Q5kLMu++bjusub3M5WLu6kHTgwoBdGeWefhCN/ByOGMyWM2JaMHR+alrzmHGZg1JeYPfHz1LUe7NsQLnsGrUwuT0Fwm/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/9oACgICEAMQAAAA83ORl1o0+d5gMRvkV3PQAaOV8pAHVHY6bQAAZPzSK7s+ugaAEUh4vzH6kXQ0mA5YGL8x+uAhMGrlpVhXIvQSYSx3NIWdFZTqDCGOlc401e2XPtQA5mkMgbrWcNBDTE5aE3vXOIadS0mqTWjycom2rgYTspIoEl//xAA0EAACAgIBAgQEBAUEAwAAAAABAgADBBESITEFIkFREBNhcRQyM1IjNEJygSAkQ5FiobH/2gAIAQEAAT8AD9OsLxmmp1gOp8wxX1PmgyswtOJ3v4kzUUahO+k4abc30gjE+k2CYY29RTD2lVb2k8F3Bh3H2EXBHq5i4dQ94lKJ2E4iFYU9p6wwHfw9ZoGEdYR0m9RBCwg7Q9GlVFl58vQerSmlKECL8Nf6L87Fx34WWef2Ag8RwrAQl+j9VldtdiBmsB9mC63DkJ23FYEbh6wQPo6hMHWFNzfSE7MDlRMbDe4h7NhIqqihVAAHYfDcJm4TGYiZdtoy7t9+ZjowCOmuDr/17iVOxpdOZ7Q5aNY3MdNyrIrDhVcEGD3B6Qlpw6zvD0itsQqRBQAuzMLG+bcXdfIn/s/6CfiY2jM/pl3/AN0wQtuJlI4J+X5xKTyZxrZ101GRwR00fSIltmUqp0ckTFoaqv8AiFWc9yJbWyvyH5ZzO4p3NArFXU4KSJRTsbft7Qa7D4F+s3DN/AmGeL1cMwt+8AzBcV4+b9UUTw2rQdzLbSbjv0M8OAtzC/ssRtCclI6yylP6T/iE6ESzYhfUFvSJmWK+PWo6MSIB0lh0DKhzJaKxO+S6h1B8D8PGquVVVv7TozHUtYK99GI3/iJWAnFBqZ2OaX+88Gr3Za85Ryw5QZFiXopGwTFXYBbsZxAYgQ17EX6zCxkPC4jqAdfDNyzuxV7do2ZzKVAsFX1B6blfiTUgB9OvuILFdQynYMVpz3NwmZtiCiwP1BE8Pp5uXI7RBxEurrdD8xQZS1GK1qKfTkYmQjnvC2xsnpMjJR36bBB7zAvF9OoRrrFYai+dlQHqxAErQVoqDsBqZdpArrB1zbRP0EzbPm2AKsVeJcce4GpoKp8hB+s8Ma3iy8Tw9DDufjzXl/KdNL2+DEATxC+s2IncrMYoKk7CDRniF3BOH7obWLb3vpK3cER8ljUCD0AKmE9iZ4Y9xyBwJCAgvC/Jeg6weQ6JmLgV45Duedk5bmUN1sfUDpMalnvA4HvLcFHr8ugYPD8k264cR7xK1qQKAIBHpqcgsikjsSIZmOyY1pXvqJyZ99SZfa6FE/YoEwH51eux3Jniqv0bXSAecCIQgBYbEcnqCYFaxgiDZJ0JTSuOi1r19zKR07wKlln2ELbg+8frsRKkr5FF0TGTkhXZH1HpASFAJ2feAfFpnsBi3faUcEPNj27CNdybZ6nuSZjZorUznXm1BCdHvMnDFB5Ftgkx3Pl32nfYlIFaM5B5N5az/wDTK9so2PSIeLa9IHGyB3hIE38APhqb+G45Jnip/wBuo93muk1NkGYtrV2DXWZzOz6jowExqHyLlqTue59hM/w7dVRoH6NcxNW0pZ+5Z8tPaW1hRtYxEtyKqj5mAMQggEdiIDDNwmF4DG6dSZnNU6BeQJB7T8AhxNqPPHqsVgGXUSktr2JAlNJofdulmXkc2HH8oEAsuYVqCWPQCYGMuImu7t+Zo2uLfYzBrNdHAwN11LG2IzDcswVtu+YzGIOIA9AIITuEwn4Z/wA/irJaEAlzvZpmv5tKQORLMBoTw7JBHyjMimhtvYPSW5FNY4VgaEvvZ2YkmUY2Rf1UaT9xmHj142/Vj3aVBSOUvvSmt3fsBoTCyBfXvsR0ImQCHGvWMSF16QsCfbr6wQf6DGsBbiv+TLaUuXTjcuxD/TjgD6NszGprezrg6Hu5mRj3Ythsr2az2I9Jdmvbokwh36qCRMTAAPO4bh6DQgGyJmZf4Sge57T8Y2YcRGX+skzHouV7HqA4NLh/CDEdROQdgsBctplGhB2+G/gx1Gcdup+gGyZxasANWULdl9TOaC8UE6sI2BOOoexmW+Slh876nz7Onbp68RLMmx7eZMxyxprLdyoJmXlpj6HdjMLI/EE9OizMwjlhFB0QZZVXRaKqv+GoL/lupmL+isYBlIMO672U+hnEDsNTYE5iPei+u/t1gvZuyECV1taev5fUzSVKSAAAJTu1za3dz5foJ4runxKhx7JM216afnJ6dxMbIryUDL0PqJlLSa2NkdQGOjsQDZAlQ0ij2AmbzbJctvv0nhlLU1bddEmZ2c9AUVjr3JmO5fyk+cnk59yYg41gD0ERiy7I1PEEIvUj+pZ+HyO/l+0ONkt+0QYFh72z8Cw7OJY1dN1df5nYwaRPoBLg1qhB2bvFRV1oTxfCe81WpGpFtBrb1XUR3wslQenFvNPEVudRxG0MwsN3fbr5IfDqfnC0f9TjqGqtmDFASIJ4hloxFSeh8xmNaKiLCJi5VVwHFuvw8RX+Er/tPw3OQ3LXCIWlT/Mz+bdlmVbqja+4i9FH2gYN2M8WssqxkavuLRK7FtrSxezAGeMYjc/nrPCrvnYxrb81cK6gPw7TNziSaqj92gEuxb60RyOhlFroyuCehlbckVvcTLTni3j/AMDCYzQNrrM/J41mUKDjvZ6mV7txaPusvBNFgB15DPCi5x/NPFf5U/3CeE5nfHf7pLUW2sqexEoRsDO036dvljiESzIqq0HcCZecbdpUfL6t8MLFNjB2HlE4qw4kdJZ4fxs2jgBesqdGRdMD0jjaOPdTCYTL8lKV2xmTabtGUJ/tdfSYAJxkHsZa5s5UIevDrMSj5FSpPFv5N/uJtkdWB0QZg5q3rxbo8y6RdWyyguaVFn5wNGNM887yORIEA1MXBLkNYND2iqFAAg7zxEW1vyBOiJ4ebzkIE7f1TJtWmh3Yxnl+UtY+syLHtbbGM/lAmKd46n6Tw51dHHsxmH5rbbfewj/A+GVX83HtT3WOCIjshVwCPZpT4n5SlvcR/EiNcBLPEb3HoIldlreRSxmNgLXp38zwCag6GW49WTXxcTHxaMQ6Tu08YG8RD7Wy/JC9F7xiWOzGr5QoQ0xh/AA+k8NrdWy/7pTUK60X2hjTL8ML5S8PyOeszutwVF1UnRRPsJVRZcTwG/czGwK22bH2QewiVpWNKABB8TK36QWIx9jPFf5Gz7rH/MfgI35pi/pCYXaz+/4mHv8A4Myf00n/ABPPDf0bvvMP89n90PpF+JlXYy/9Wn+6eJfyL/dZ/8QAJhEAAQMDBAEEAwAAAAAAAAAAAQACEQMQIRIgMUFCBBQiYTJRUv/aAAgBAgEBPwAutBPSFF58UKDl7Z/9BPpvYchdlF2QjI5ThIhRKZTc4wFTphg+9haHDKf6ZvIWkycZRB7NmNLk1oYNoUZVSnrHMHopzHU3fMpzy9wxACozrsNotWYHMOASOE0tYDrGUxumxAKm8XrVNA+1BdVDTkG5sSm7KjdSqUIEtvKJXKbixIC1auLHyGyT0EJCEypKMkoCF2qghwP7xeJs60oGFyUFVEsNihxY3i/SlcoXhFTc/iUUNk7TwV//xAAiEQABBAIBBAMAAAAAAAAAAAABABARIAIhAxIiMEEyUXH/2gAIAQMBAT8AfbG52gIpqsWNNIMbhgIafB6mxpGhctBKiEB25KfCSvjw/pfSlhQCSuU6xFDUAlQMBJRMmaFvaI+kMCUOnjCyyOThGmI7QUczX//Z"
            alt="dog"
          />
          <div className="welcome-user">
            <div>Hello, User</div>
            <div className="welcome-user sub-text">
              Check your activities in this dashboard.
            </div>
          </div>
        </div>

        <DashboardList contentList={content} />
      </div>
    </>
  );
}

export default App;
