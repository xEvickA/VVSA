using web.DatabaseModel;

namespace web.Services;
public interface ITransactionService
{
    List<TransactionViewModel> GetTransactions();
    TransactionViewModel GetTransactionById(int id);
}