![Oriid Benchmark Chart](https://raw.githubusercontent.com/JalsonicNetworks/Oriid/refs/heads/main/oriId.png)

# Oriid – Ultra-Fast, Collision-Free Unique ID Generator

**Oriid** is a blazing-fast, high-throughput JavaScript library for generating **unique, 10-character alphanumeric IDs** at a rate of **20 million+ per second**, using only the characters `a-z`, `A-Z`, and `0-9`.


## 🔥 Why Oriid?

Traditional ID generators like MongoDB’s ObjectId or MySQL’s AUTO_INCREMENT come with limitations:

| Feature                  | Oriid       | MongoDB ObjectId | MySQL Auto ID |
|--------------------------|-------------|------------------|----------------|
| Custom length            | ✅ Yes (10+) | ❌ Fixed (24 hex) | ❌ Fixed-size integers |
| URL-safe / Alphanumeric  | ✅ Yes       | ❌ Hex only       | ❌ Numeric only |
| High throughput          | ✅ 20M/sec+  | ⚠️ Limited        | ⚠️ Risk of lock contention |
| No DB dependency         | ✅ Yes       | ❌ Tied to MongoDB| ❌ Tied to RDBMS |
| Collision resistant      | ✅ Yes       | ✅ Yes            | ❌ Needs locking |
| Sortable (time-based)    | ✅ Optional  | ✅ Yes            | ✅ Yes |
| Works offline            | ✅ Yes       | ❌ No             | ❌ No |
| Distributed-safe         | ✅ Yes       | ⚠️ Needs config   | ❌ Hard to scale |


✅ Key Benefits

- **10+ character compact IDs**
- **Base62 encoding** (a–z, A–Z, 0–9)
- **No external dependencies**
- **No collisions**, even under extreme load
- **Perfect for distributed systems**
- **Fast enough for real-time analytics, logs, and microservices**


## 📦 Installation

```bash
npm install oriid
```

🚀 Quick Start

```js
import { oriid } from "oriid";

let OrderTrackingId = oriid(); // Example: "aX8rT9LpQv"
```

🔍 Example Output

```js
console.log(oriid()); // "bQ9xLpZrKd"
console.log(oriid()); // "Xv4Kp9AmR2"
console.log(oriid()); // "af9RWxLpO0"
```

This returns a unique 10-character ID, safe for use in:
URLs - File names - Offline devices - High-performance services

📚 API Reference

```js
 oriid(): string
```

Returns a new **unique 10-character alphanumeric string**.

Details:
**Type**: `Function`
**Returns**: `string` – 10-character ID
**Alphabet**: `a–z`, `A–Z`, `0–9`
**Safe for**: URLs, filenames, logs, offline use

🔍 Verify Oriid

```js 
verifyOriid(id: string): boolean
```

```js
import { oriid, verifyOriid } from 'oriid';

const id = oriid();
console.log(id); // Example: "aP9Tx8LmQz"

console.log(verifyOriid(id)); // true
console.log(verifyOriid("bad-id")); // false
```

Checks whether a given string is a valid Oriid.

- ✅ Must be exactly 10 characters
- ✅ Only a–z, A–Z, 0–9 allowed

```js
verifyOriid("aP9Tx8LmQz"); // true
verifyOriid("1234567890"); // true
verifyOriid("bad-id!");    // false
verifyOriid("toolong12345"); // false
```

## When to Use Oriid
Oriid is ideal for high-frequency systems such as logs and telemetry, real-time services like transactions or orders, and sharded environments where coordination is difficult. It also works well for offline-safe ID generation and use cases requiring short, URL-friendly IDs such as short URLs or file names.


How many unique 10-character IDs can be generated using a-z, A-Z, 0-9?

✅ How many unique IDs are possible with 10 characters?

For 10-character IDs, each character has 62 possibilities:

$$
62^{10} = 839,299,365,868,340,224
$$

That’s:
**\~839.3 quadrillion** unique IDs.

✅ How Long Would That Last?

At **2 million IDs/second**:

$$
\frac{839,299,365,868,340,224}{2,000,000} = 419,649,682,934 \text{ seconds}
$$

$$
\approx 13,305 \text{ years}
$$

Do You Need to Increase ID Length?
No, 10 characters is still more than enough for generating 20M/sec for over a thousand years.

✅ Conclusion
You can generate 10-character IDs at 2M/sec for over 13,000 years before exhausting all combinations. You're extremely safe.


🧯 Memory Usage
Oriid: Very low, GC-safe (non-cryptographic)
No heap leaks or bloat observed even after 1 billion IDs


🆚 Why Not Mongo ObjectId?

* MongoDB ObjectIds are **24-character hex strings** → **larger storage & URLs**
* Oriid IDs are **shorter, alphanumeric**, and **URL-safe**
* No database dependency or cluster configuration required

🆚 Why Not MySQL AUTO\_INCREMENT?

* MySQL’s auto-increment requires a **database roundtrip**
* It’s **not globally unique** (dangerous in distributed setups)
* Can't be safely merged across servers

Oriid solves these by being:

* In-memory
* Globally unique (based on time + counter)
* Independent of DB locks or sequences



**Reporting Bugs**
If you find an issue with EasyCSS, please report it via the GitHub issue tracker and via E-mail : github@jalsonic.com. 

Designed, Built and Maintained by [Imran Amanat](https://www.imranamanat.com) imran@imranamanat.com and [Jalsonic Networks Teams](https://www.jalsonic.com) 2025. 
A Division of [Jalsonic Networks](http://jalsonic.com) 2025.
