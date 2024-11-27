using Microsoft.AspNetCore.Mvc;
using web.DatabaseModel;
using web.Services;
using web.Repositories;

namespace web.Controllers;

[ApiController]
[Route("api/transactions")]
public class TransactionController : ControllerBase
{
    private readonly ILogger<TransactionController> _logger;
    private readonly ITransactionService _transactionService;

    public TransactionController(ILogger<TransactionController> logger, ITransactionService transactionService)
    {
        _logger = logger;
        this._transactionService = transactionService;
    }

    [HttpGet(Name = "GetTransactions")]
    public List<TransactionViewModel> GetTransactions()
    {
        return this._transactionService.GetTransactions();
    }

    [HttpGet("{id}", Name = "GetTransactionById")]
    public TransactionViewModel GetTransactionById(int id)
    {
        return this._transactionService.GetTransactionById(id);
    }
}
