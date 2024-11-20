using web.Models;

namespace web.Repositories;
public class TransactionRepository : ITransactionRepository
{
    private List<Transaction> transactions;

    public TransactionRepository()
    {
        transactions = new List<Transaction>();
        var transaction1 = new Transaction
        {
            TransactionId = 1,
            FullName = "John Doe",
            TransactionType = TransactionType.Incoming,
            AccountNumber = "1234567890",
            BankCode = "123",
            IssueDate = DateTime.Now,
            Amount = 1000
        };
        var transaction2 = new Transaction
        {
            TransactionId = 2,
            FullName = "Jane Doe",
            TransactionType = TransactionType.Outgoing,
            AccountNumber = "0987654321",
            BankCode = "456",
            IssueDate = DateTime.Now,
            Amount = 500
        };

        transactions.Add(transaction1);
        transactions.Add(transaction2);
    }

    public List<Transaction> GetTransactions()
    {
        return transactions;
    }

    public Transaction GetTransactionById(int id)
    {
        return transactions.FirstOrDefault(t => t.TransactionId == id);
    }
}