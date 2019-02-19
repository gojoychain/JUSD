module.exports = {
  abi: [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "tokenName",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "supply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "tokenDecimals",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "decimals",
          "type": "uint8"
        },
        {
          "name": "totalSupply",
          "type": "uint256"
        },
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "Transfer223",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  bytecode: '0x60806040523480156200001157600080fd5b50604051620017a3380380620017a3833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b5050602082015160408084015160609094015160068054600160a060020a031916600160a060020a0380841691909117918290559251949750929550928392909116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080600160a060020a0381161515620001b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52657175697265732076616c696420616464726573732e000000000000000000604482015290519081900360640190fd5b85516000106200022157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e616d652063616e6e6f7420626520656d7074792e0000000000000000000000604482015290519081900360640190fd5b84516000106200029257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f73796d626f6c2063616e6e6f7420626520656d7074792e000000000000000000604482015290519081900360640190fd5b60008311620002ed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180620017806023913960400191505060405180910390fd5b85516200030290600190602089019062000442565b5084516200031890600290602088019062000442565b506003805460ff191660ff86161790556000838155600160a060020a03831680825260046020908152604080842087905580518781529051606094927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a382600160a060020a03166000600160a060020a03167f56cb3ee014f67354cae425516e02f11df2ff3b534d0373fa2a8b9a5e3d3a9fd486846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620003f9578181015183820152602001620003df565b50505050905090810190601f168015620004275780820380516001836020036101000a031916815260200191505b50935050505060405180910390a350505050505050620004e7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200048557805160ff1916838001178555620004b5565b82800160010185558215620004b5579182015b82811115620004b557825182559160200191906001019062000498565b50620004c3929150620004c7565b5090565b620004e491905b80821115620004c35760008155600101620004ce565b90565b61128980620004f76000396000f3fe608060405234801561001057600080fd5b506004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100b4578063a9059cbb11610083578063a9059cbb14610309578063be45fd6214610335578063dd62ed3e146103f0578063f2fde38b1461041e5761011d565b80638da5cb5b146102a95780638f32d59b146102cd57806395d89b41146102d55780639dc29fac146102dd5761011d565b8063313ce567116100f0578063313ce5671461022f57806340c10f191461024d57806370a0823114610279578063715018a61461029f5761011d565b806306fdde0314610122578063095ea7b31461019f57806318160ddd146101df57806323b872dd146101f9575b600080fd5b61012a610444565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016457818101518382015260200161014c565b50505050905090810190601f1680156101915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101cb600480360360408110156101b557600080fd5b50600160a060020a0381351690602001356104d9565b604080519115158252519081900360200190f35b6101e76105b0565b60408051918252519081900360200190f35b6101cb6004803603606081101561020f57600080fd5b50600160a060020a038135811691602081013590911690604001356105b6565b6102376107a1565b6040805160ff9092168252519081900360200190f35b6101cb6004803603604081101561026357600080fd5b50600160a060020a0381351690602001356107aa565b6101e76004803603602081101561028f57600080fd5b5035600160a060020a0316610970565b6102a761098b565b005b6102b1610a2a565b60408051600160a060020a039092168252519081900360200190f35b6101cb610a39565b61012a610a4a565b6101cb600480360360408110156102f357600080fd5b50600160a060020a038135169060200135610aa8565b6101cb6004803603604081101561031f57600080fd5b50600160a060020a038135169060200135610c2a565b6101cb6004803603606081101561034b57600080fd5b600160a060020a038235169160208101359181019060608101604082013564010000000081111561037b57600080fd5b82018360208201111561038d57600080fd5b803590602001918460018302840111640100000000831117156103af57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d79945050505050565b6101e76004803603604081101561040657600080fd5b50600160a060020a038135811691602001351661101e565b6102a76004803603602081101561043457600080fd5b5035600160a060020a0316611049565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156104cf5780601f106104a4576101008083540402835291602001916104cf565b820191906000526020600020905b8154815290600101906020018083116104b257829003601f168201915b5050505050905090565b60008115806105095750336000908152600560209081526040808320600160a060020a0387168452909152902054155b15156105495760405160e560020a62461bcd0281526004018080602001828103825260348152602001806111e06034913960400191505060405180910390fd5b336000818152600560209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60005490565b600082600160a060020a0381161515610607576040805160e560020a62461bcd0281526020600482015260176024820152600080516020611214833981519152604482015290519081900360640190fd5b600160a060020a03851660008181526005602090815260408083203384528252808320549383526004909152902054610646908563ffffffff61114416565b600160a060020a03808816600090815260046020526040808220939093559087168152205461067b908563ffffffff61115616565b600160a060020a0386166000908152600460205260409020556106a4818563ffffffff61114416565b600160a060020a0380881660008181526005602090815260408083203384528252918290209490945580518881529051606094938a16936000805160206111c0833981519152928290030190a385600160a060020a031687600160a060020a03166000805160206111a083398151915287846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610759578181015183820152602001610741565b50505050905090810190601f1680156107865780820380516001836020036101000a031916815260200191505b50935050505060405180910390a35060019695505050505050565b60035460ff1690565b60006107b4610a39565b15156107f45760405160e560020a62461bcd02815260040180806020018281038252602a815260200180611234602a913960400191505060405180910390fd5b82600160a060020a0381161515610843576040805160e560020a62461bcd0281526020600482015260176024820152600080516020611214833981519152604482015290519081900360640190fd5b600054610856908463ffffffff61115616565b6000908155600160a060020a038516815260046020526040902054610881908463ffffffff61115616565b600160a060020a038516600081815260046020908152604080832094909455835187815293516060946000805160206111c083398151915292908290030190a384600160a060020a03166000600160a060020a03166000805160206111a083398151915286846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561092a578181015183820152602001610912565b50505050905090810190601f1680156109575780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3506001949350505050565b600160a060020a031660009081526004602052604090205490565b610993610a39565b15156109d35760405160e560020a62461bcd02815260040180806020018281038252602a815260200180611234602a913960400191505060405180910390fd5b600654604051600091600160a060020a0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36006805473ffffffffffffffffffffffffffffffffffffffff19169055565b600654600160a060020a031690565b600654600160a060020a0316331490565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156104cf5780601f106104a4576101008083540402835291602001916104cf565b6000610ab2610a39565b1515610af25760405160e560020a62461bcd02815260040180806020018281038252602a815260200180611234602a913960400191505060405180910390fd5b82600160a060020a0381161515610b41576040805160e560020a62461bcd0281526020600482015260176024820152600080516020611214833981519152604482015290519081900360640190fd5b600054610b54908463ffffffff61114416565b6000908155600160a060020a038516815260046020526040902054610b7f908463ffffffff61114416565b600160a060020a038516600081815260046020908152604080832094909455835187815293516060949293926000805160206111c083398151915292908290030190a36000600160a060020a031685600160a060020a03166000805160206111a083398151915286846040518083815260200180602001828103825283818151815260200191508051906020019080838360008381101561092a578181015183820152602001610912565b600082600160a060020a0381161515610c7b576040805160e560020a62461bcd0281526020600482015260176024820152600080516020611214833981519152604482015290519081900360640190fd5b33600090815260046020526040902054610c9b908463ffffffff61114416565b3360009081526004602052604080822092909255600160a060020a03861681522054610ccd908463ffffffff61115616565b600160a060020a038516600081815260046020908152604091829020939093558051868152905160609333926000805160206111c0833981519152929081900390910190a384600160a060020a031633600160a060020a03166000805160206111a083398151915286846040518083815260200180602001828103825283818151815260200191508051906020019080838360008381101561092a578181015183820152602001610912565b600083600160a060020a0381161515610dca576040805160e560020a62461bcd0281526020600482015260176024820152600080516020611214833981519152604482015290519081900360640190fd5b33600090815260046020526040902054853b90610ded908663ffffffff61114416565b3360009081526004602052604080822092909255600160a060020a03881681522054610e1f908663ffffffff61115616565b600160a060020a038716600090815260046020526040812091909155811115610f415785600160a060020a031663c0ee0b8a3387876040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610eda578181015183820152602001610ec2565b50505050905090810190601f168015610f075780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610f2857600080fd5b505af1158015610f3c573d6000803e3d6000fd5b505050505b604080518681529051600160a060020a0388169133916000805160206111c08339815191529181900360200190a385600160a060020a031633600160a060020a03166000805160206111a083398151915287876040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fd7578181015183820152602001610fbf565b50505050905090810190601f1680156110045780820380516001836020036101000a031916815260200191505b50935050505060405180910390a350600195945050505050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b611051610a39565b15156110915760405160e560020a62461bcd02815260040180806020018281038252602a815260200180611234602a913960400191505060405180910390fd5b600160a060020a03811615156110db5760405160e560020a62461bcd02815260040180806020018281038252602581526020018061117b6025913960400191505060405180910390fd5b600654604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60008183101561115057fe5b50900390565b600082820183811080159061116b5750828110155b151561117357fe5b939250505056fe52657175697265732076616c6964206164647265737320666f72206e6577206f776e65722e56cb3ee014f67354cae425516e02f11df2ff3b534d0373fa2a8b9a5e3d3a9fd4ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef526571756972657320616d6f756e7420746f2062652030206f722063757272656e7420616c6c6f77616e636520746f206265203052657175697265732076616c696420616464726573732e0000000000000000004f776e6572206973206f6e6c7920616c6c6f77656420746f2063616c6c2074686973206d6574686f642ea165627a7a72305820539cad162530838abba6031ee9505e79f6e1d68359839e4664ff3437f49a90880029746f74616c537570706c79206d7573742062652067726561746572207468616e20302e',
}
