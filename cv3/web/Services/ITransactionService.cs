using web.Models;

namespace web.Services;
public interface ITransactionService
{
    List<Transaction> GetTransactions();
    Transaction GetTransactionById(int id);
}