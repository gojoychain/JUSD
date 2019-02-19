pragma solidity ^0.5.4;

import "./GRC223.sol";
import "../lib/Ownable.sol";

/**
 * @title EUSD stablecoin contract.
 * @dev Initially mints the supply to the owner of the contract.
 *      Has mint and burn functionality to increase/decrease total supply.
 */
contract EUSD is GRC223, Ownable {
    /**
     * @dev Creates the token and mints the initial token supply to the owner.
     * @param name Name of the token.
     * @param symbol Symbol of the token.
     * @param decimals Decimals of the token.
     * @param totalSupply Initial supply of tokens.
     * @param owner Owner of the initial tokens.
     */
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 totalSupply,
        address owner)
        Ownable(owner)
        public
        validAddress(owner)
    {
        require(bytes(name).length > 0, "name cannot be empty.");
        require(bytes(symbol).length > 0, "symbol cannot be empty.");
        require(totalSupply > 0, "totalSupply must be greater than 0.");

        _name = name;
        _symbol = symbol;
        _decimals = decimals;
        _totalSupply = totalSupply;
        _balances[owner] = totalSupply;

        bytes memory empty;
        emit Transfer(address(0), owner, totalSupply);
        emit Transfer223(address(0), owner, totalSupply, empty);
    }

    /**
     * @dev Mints an amount of the token and assigns it to an account. 
     *      This encapsulates the modification of balances such that the proper 
     *      events are emitted.
     * @param account The account that will receive the created tokens.
     * @param value The amount that will be created.
     */
    function mint(
        address account, 
        uint256 value) 
        public
        onlyOwner
        validAddress(account)
        returns (bool success)
    {
        _totalSupply = _totalSupply.add(value);
        _balances[account] = _balances[account].add(value);

        bytes memory empty;
        emit Transfer(address(0), account, value);
        emit Transfer223(address(0), account, value, empty);

        return true;
    }

    /**
     * @dev Burns an amount of the token of a given account.
     * @param account The account whose tokens will be burnt.
     * @param value The amount that will be burnt.
     */
    function burn(
        address account, 
        uint256 value) 
        public 
        onlyOwner
        validAddress(account)
        returns (bool success)
    {
        _totalSupply = _totalSupply.sub(value);
        _balances[account] = _balances[account].sub(value);
        
        bytes memory empty;
        emit Transfer(account, address(0), value);
        emit Transfer223(account, address(0), value, empty);

        return true;
    }
}
