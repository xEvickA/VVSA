using web.DatabaseModel;
using web.Repositories;

namespace web.Services;
public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        this._transactionRepository = transactionRepository;
    }

    public List<TransactionViewModel> GetTransactions()
    {
        var transactions = _transactionRepository.GetTransactions();
        var transactionViewModels = new List<TransactionViewModel>();
        foreach (var transaction in transactions)
        {
            var transactionViewModel = new TransactionViewModel
            {
                TransactionId = transaction.Id,
                FullName = transaction.User.Name,
                TransactionType = transaction.TransactionType.Name,
                AccountNumber = transaction.AccountNumber,
                BankCode = transaction.BankCode,
                IssueDate = transaction.IssueDate,
                Amount = transaction.Amount
            };
            transactionViewModels.Add(transactionViewModel);
        }
        return transactionViewModels;
    }

    public TransactionViewModel GetTransactionById(int id)
    {
        var transaction = _transactionRepository.GetTransactionById(id);
        var transactionViewModel = new TransactionViewModel
        {
            TransactionId = transaction.Id,
            FullName = transaction.User.Name,
            TransactionType = transaction.TransactionType.Name,
            AccountNumber = transaction.AccountNumber,
            BankCode = transaction.BankCode,
            IssueDate = transaction.IssueDate,
            Amount = transaction.Amount
        };
        return transactionViewModel;
    }
}