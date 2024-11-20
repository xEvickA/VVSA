using web.Models;
using web.Repositories;

namespace web.Services;
public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        this._transactionRepository = transactionRepository;
    }

    public List<Transaction> GetTransactions()
    {
        return _transactionRepository.GetTransactions();
    }

    public Transaction GetTransactionById(int id)
    {
        return _transactionRepository.GetTransactionById(id);
    }
}