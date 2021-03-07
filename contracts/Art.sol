// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface IERC721 {
    /**
     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner);

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must exist and be owned by `from`.
     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Transfers `tokenId` token from `from` to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must be owned by `from`.
     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Gives permission to `to` to transfer `tokenId` token to another account.
     * The approval is cleared when the token is transferred.
     *
     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
     *
     * Requirements:
     *
     * - The caller must own the token or be an approved operator.
     * - `tokenId` must exist.
     *
     * Emits an {Approval} event.
     */
    function approve(address to, uint256 tokenId) external;

    /**
     * @dev Returns the account approved for `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function getApproved(uint256 tokenId) external view returns (address operator);

    /**
     * @dev Approve or remove `operator` as an operator for the caller.
     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
     *
     * Requirements:
     *
     * - The `operator` cannot be the caller.
     *
     * Emits an {ApprovalForAll} event.
     */
    function setApprovalForAll(address operator, bool _approved) external;

    /**
     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.
     *
     * See {setApprovalForAll}
     */
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    /**
      * @dev Safely transfers `tokenId` token from `from` to `to`.
      *
      * Requirements:
      *
      * - `from` cannot be the zero address.
      * - `to` cannot be the zero address.
      * - `tokenId` token must exist and be owned by `from`.
      * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
      * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
      *
      * Emits a {Transfer} event.
      */
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Art{
    /**
     * @dev Emitted when 
    */
    event Registe(address indexed owner, address indexed nftcontract, uint256 indexed tokenId);
    
    /**
     * @dev Emitted when
    */ 
    event Vote(address indexed voter, address indexed nftcontract, uint256 indexed tokenId, uint256 power,  uint256 votes);
    
    /**
     * @dev Emitted when 
    */  
    event Auction(address indexed owner, uint256 indexed tokenId);

    /**
     * @dev Emitted when 
    */  
    event Bid(address indexed bider, uint256 indexed price, uint256 indexed time);

    /**
     * @dev Emitted when 
    */  
    event Claim(address indexed owner, address indexed nftcontract, uint256 indexed tokenId);

    // @notice Possible states that a artwork may be in
    enum ArtState {
        Active,
        Auction,
        Sold,
        Closed
    }

    uint256 public constant DURATION = 3 minutes;

    // Platform token
    address public _token;

    // use for list artworks
    Artwork[] public _allworks;

    // bids history of allworks[i]
    mapping (uint256 => Record[]) public _bids;
    
    // use for registe artwork
    mapping (address => mapping(uint256 => uint256)) public _registedWorks;
    
    // record user vote time
    mapping (address => uint256) public _voteTime;

    struct Record {
        address offer;
        uint256 price;
    }

    // Artwork 
    struct Artwork {
        // owner
        address owner;

        // nftcontract address
        address nftcontract;
        
        // tokenId
        uint256 tokenId;
        
        ArtState status;
        
        // time artwork start register or start auction
        uint256 started;
        
        // last vote time
        uint256 update;

        // weighted votes 
        // newpower = (update - start)/(now -start) * power + newvotes
        uint256 power;

        // the total number of votes the artwork had
        uint256 votes;

        // the minimum price owner can accept units in ETH
        uint256 price;
    }
    
    // registe artwork to platform
    function registe(address nftcontract, uint256 tokenId, uint256 price) external {
        require(_registedWorks[nftcontract][tokenId] == 0, "Artwork already registed");

        // TODO:: In demo mode not transfer ownership
        // IERC721(nftcontract).transferFrom(msg.sender, address(this), tokenId)

        _allworks.push(Artwork({
            owner: msg.sender,
            started: block.number,
            nftcontract: nftcontract,
            tokenId: tokenId,
            status: ArtState.Active,
            // initial register treat as one vote but not in record
            update: block.timestamp,
            power: 1,
            votes: 1,
            price: price
        }));

        _registedWorks[nftcontract][tokenId] = _allworks.length;

        emit Registe(msg.sender, nftcontract, tokenId);
    }

    // vote an artwork
    function vote(address nftcontract, uint256 tokenId, uint256 votes) external {

        uint256 index = _registedWorks[nftcontract][tokenId];
        require(index > 0, "Voted artwork not exist");
        
        // uint256 extra = block.timestamp - _voteTime[msg.sender] > 1 days ? 1 : 0; 
        
        // this require approve before, if transfer only one per day, not necessary
        // if (votes - extra > 0) {
        //     IERC20(_token).transferFrom(msg.sender, address(this), votes - extra);
        // }

        Artwork storage work = _allworks[index - 1];
        require(work.status == ArtState.Active, "Artwork status is not active");

        work.power = (work.update - work.started)/(block.timestamp - work.started) * work.power + votes;
        work.update = block.timestamp;
        work.votes = work.votes + votes;
        
        _voteTime[msg.sender] = block.timestamp;

        emit Vote(msg.sender, nftcontract, tokenId, work.power, work.votes);
    }

    // use this function to bid nft
    function bid(address nftcontract, uint256 tokenId) external payable {
        uint256 index = _registedWorks[nftcontract][tokenId];
        require(index > 0, "Bid artwork not exist");

        Artwork storage work = _allworks[index - 1];
        // TODO:: in demo do not required
        // require(work.status == ArtState.Auction, "Artwork status is not auction");

        // last bid time exceed longest wait time.
        if (block.timestamp - work.update > DURATION) {
            work.status = ArtState.Sold;
            return;
        }

        uint256 price = msg.value;
        require(price >= work.price, "Bid price lower than minimun price owner can accept");

        if (_bids[index].length > 0) {        
            require(price > _bids[index][_bids[index].length - 1].price, "Bid price lower than last offer price");
        }

        _bids[index].push(Record({
            offer: msg.sender,
            price: price
        }));
        
        work.update = block.timestamp;

        emit Bid(msg.sender, price, block.timestamp);
    }

    // push a nft into Auction state
    function auction(address nftcontract, uint256 tokenId) external {        
        uint256 index = _registedWorks[nftcontract][tokenId];
        require(index > 0, "Auction artwork not exist");

        Artwork storage work = _allworks[index - 1];
        // TODO:: in demo do not required
        // require(work.status == ArtState.Active, "Artwork status is not active");

        // TODO::In demo do not require owner only
        // require(msg.sender == work.owner, "Only owner can auction artwork");

        work.status = ArtState.Auction;
        work.started = block.timestamp;
        work.update = block.timestamp;

        emit Auction(nftcontract, tokenId);
    }

    // use this claim reward
    function claim(address nftcontract, uint256 tokenId) external {
        uint256 index = _registedWorks[nftcontract][tokenId];
        require(index > 0, "Claim artwork not exist"); 

        Artwork storage work = _allworks[index - 1];
        // last bid time exceed longest wait time.
        if (work.status == ArtState.Auction && block.timestamp - work.update > DURATION) {
            work.status = ArtState.Sold;
        }

        // TODO:: in demo do not required
        // require(work.status == ArtState.Sold, "Only sold artwork can claim");

        //TODO:: in demo do not distinguish from sender 
        payable(msg.sender).transfer(work.price);

        work.status = ArtState.Closed;

        emit Claim(work.owner, nftcontract, tokenId);
    }
    
    // 索回艺术品   
    function exit(address nftcontract, uint256 tokenId) external {
        // TODO:: 
    }
    
    /**
     * @dev Initializes the contract by setting a `token` to the platform token.
    */
    constructor (address token_) {
        _token = token_;
    }
}