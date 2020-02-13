const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
 
  type Branch {
    id: ID!
    name: String!
    lon: Float!
    lat: Float!
    distance: Int
  }
  
  type Stock {
    sku: ID!
    branchId: String!
    amount: Int
  }  

  type Query {
    branches: [Branch]
    stocks: [Stock]
  }
  
`;


const branches = [
  {
	id: '1981',
    name: 'SP VL LEOPOLDINA B',
    lon: -46.73238,
    lat: -23.52616
  },
  {
	id: '2717',
    name: 'POSTO ITAU D',
    lon: -46.744709,
    lat: -23.526542
  },
];

const stocks = [
  {
	sku: "234F",
	branchId: "2717",
	amount: 27
  },
  {
	sku: "346K",
	branchId: "2717",
	amount: 12
  },
  {
	sku: "566J",
	branchId: "1981",
	amount: 37
  },	
];


const resolvers = {
  Query: {
	  branches: () => branches,
	  stocks: () => stocks,
  },
};


const server = new ApolloServer({ typeDefs, resolvers, tracing: false });

//The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});