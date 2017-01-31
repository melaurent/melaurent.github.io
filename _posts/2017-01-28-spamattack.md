---
layout: post
title: Was the bitcoin network victim of a spam attack ?
---

The amount of transactions that can be confirmed by the
Bitcoin network are limited. In average, one block is mined
every 10 minutes, confirming 1 MB of transactions.
However, if there is more transactions than what can
be confirmed by the network, the queue of transactions
waiting to be confirmed starts to grow very fast. 
This can be observed by looking at the size of the mempool,
which represents the size of the unconfirmed transactions a node has to keep
in memory.
In january 2017, the size of the mempool started
to grow very fast, and people started to speculate why.

The first reason could be that the network was victim of a spam attack.
To spam the bitcoin network, one would have to send a lot of big transactions
with fees higher than average, thereby taking the place of the other
legit transactions in the queue. This lead to a very slow confirmation
time for the average bitcoin user, which sends transactions with fees
lower than the ones used for the attack. 

The second reason is that, just before the mempool started growing, a
difficulty adjustment occured. In order to keep the rate of one block every
10 minutes, the difficulty is reajusted about every 10 days. The hashrate of
the network has grown a lot during the last days, which led to a higher block
rate, of about 16%. Thus, blocks were mined 16% faster than they should be,
increasing the capacity of the network. This capacity was fully used by the
users, but when the difficulty was adjusted, and we went back to the 
rate of 1 block every 10 minutes, the transaction rate which was not a problem
for a network with 16% more capacity, was now too high, and unconfirmed
transactions started to accumulate, until users reduced their use of the
network. Here, I assume that the relation between the size of the mempool and
the rate at which users issue transactions is reflexive. Users will stop
sending transactions if they see it will take two days for them to confirm.

To get an insight of what happened, let's first plot the amount of bytes per 
second that was added to the mempool, which is calculated from the transaction 
rate, and the average transaction size. The blue curve is an average made on a 
30 minutes interval, and the green is made on a 3 hours interval.
The time of the difficulty adjustment is indicated by the vertical line in
red.

![Bytes per second]({{ site.baseurl  }}/images/bytespersecond.png)

We can see that the amount of bytes added to the mempool took off just after
the difficulty change. This bad timing led to a big increase of the mempool.

An easy way to see the effect of the difficulty adjustment on this huge
backlog would be to simulate how the bitcoin network
would have reacted if no difficulty adjustment had happened. 

# Simulations

To simulate the transaction arrivals, one could simply
use a poisson process with the rate being the average rate of the week of the attack.
But this is not precise enough. So I took the transaction rates of the week, computed
on a seven minutes interval. Then, I generated transaction arrival times with 
a poisson process with a different rate every 7 minutes, each rate being the
corresponding rate of the network.

Each transaction size is taken from the average transaction sizes of the week,
computed on a 8 minutes interval.

For the service times without difficulty change (or the time at which blocks would 
have been mined if the difficulty hadn't been adjusted), I simply took
the original service times of the network, but replaced the post-difficulty-change
interarrival times with the pre-difficulty-change interarrival times.

I ran two simulations. One with the difficulty adjustment (blue), and
one without (green). The moment when the difficulty changed is indicated by the 
vertical line in red.

![Mempool size]({{ site.baseurl  }}/images/mempoolsize.png)

We can see that the simulated mempool size with difficulty adjustment is quite close to the 
original mempool size. Obviously, the two simulations start to differ after
the difficulty changes.

Even without the difficulty adjustment, the network would have suffered from a
25 MB backlog at its peak. This indicates that it may be a spam
attack, most likely timed, which was amplified by the difficulty adjustment.

### So.. spam or not spam ?

The 23rd at around 8PM (UTC), during the high bytes/second peak, [this
address](https://blockchain.info/fr/address/1EPKSuFjTH3xbCK3b5ebaPbe8iUGvKvF8a)
was the output of a lot of big transactions with fees higher than average. 
All of this in the span of one hour.
The inputs of those transactions behave strangely. Instead of sending
everything at once, sometimes 8 or 9 transactions are used to send funds to
the `1EPKSuFjTH3xbCK3b5ebaPbe8iUGvKvF8a` address.

Edit: This process has been repeated on the 31rd, with this time the address
`16FEW2CboX5hVk3FqxNJ3Wt5StySpu1TZH`, leading to a new mempool increase.

![Strange inputs]({{ site.baseurl }}/images/strangeinput.png)

It seems like a lot if not all of these inputs have been involved in those kind
of transactions in the past. Maybe those addresses are reused to perform attack 
on the bitcoin network ? This is a plot of the size of the mempool, and the
vertical lines in red indicates when those inputs were active.

![Mempool size relation]({{ site.baseurl }}/images/inputandmempoolsize.png)

In conclusion, I don't know if this is intentional. It seems like someone
periodically performs very heavy operations, and has to transfer a lot of
bitcoins. This time, however, those big transfers combined with the difficulty 
adjustment led to a huge increase of the mempool size.

### Edit: This happened again on the 31rd

And this time, no difficulty adjustment occured, but the mempool still managed
to reach 35MB. The transactions can be seen [here](https://blockchain.info/fr/address/16FEW2CboX5hVk3FqxNJ3Wt5StySpu1TZH).
If anyone has any information on what those transfers could be,
don't hesitate to write a comment !
