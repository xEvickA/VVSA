using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using web.DatabaseModel;

namespace web.Repositories;
public class TransactionRepository : ITransactionRepository
{
    private readonly Whiyes5oContext context;
    public TransactionRepository(Whiyes5oContext context)
    {
        this.context = context;
    }

    public List<Transaction> GetTransactions()
    {
        var result = this.context.Transactions
            .Include(t => t.TransactionType)
            .Include(t => t.User)
            .ToList();
        return result;
    }

    public Transaction GetTransactionById(int id)
    {
        var result = this.context.Transactions
            .Include(t => t.TransactionType)
            .Include(t => t.User)
            .FirstOrDefault(t => t.Id == id);
        return result;
    }
}