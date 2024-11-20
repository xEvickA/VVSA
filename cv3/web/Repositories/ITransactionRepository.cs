using web.Models;

namespace web.Repositories;
public interface ITransactionRepository 
{
    List<Transaction> GetTransactions();
    Transaction GetTransactionById(int id);
}