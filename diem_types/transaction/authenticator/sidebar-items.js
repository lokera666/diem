window.SIDEBAR_ITEMS = {"constant":[["MAX_NUM_OF_SIGS","Maximum number of signatures supported in `TransactionAuthenticator`, across all `AccountAuthenticator`s included."]],"enum":[["AccountAuthenticator",""],["AuthenticationError","An error enum for issues related to transaction or account authentication."],["Scheme","An `AccountAuthenticator` is an an abstraction of a signature scheme. It must know: (1) How to check its signature against a message and public key (2) How to convert its public key into an `AuthenticationKeyPreimage` structured as (public_key | signaure_scheme_id). Each on-chain `DiemAccount` must store an `AuthenticationKey` (computed via a sha3 hash of an `AuthenticationKeyPreimage`)."],["TransactionAuthenticator","Each transaction submitted to the Diem blockchain contains a `TransactionAuthenticator`. During transaction execution, the executor will check if every `AccountAuthenticator`’s signature on the transaction hash is well-formed and whether the sha3 hash of the `AccountAuthenticator`’s `AuthenticationKeyPreimage` matches the `AuthenticationKey` stored under the participating signer’s account address."]],"struct":[["AuthenticationKey","A struct that represents an account authentication key. An account’s address is the last 16 bytes of authentication key used to create it"],["AuthenticationKeyHasher","Cryptographic hasher for an BCS-serializable #item"],["AuthenticationKeyPreimage","A value that can be hashed to produce an authentication key"]]};