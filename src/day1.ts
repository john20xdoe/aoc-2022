import { sum, select, max, isArray } from 'radash';

// Day 1 - Heaviest Elf

// const elves = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

const input = `6471
1935
1793
3843
6059
6736
6101
3133
6861
1330
1962
5538
6760

5212
2842
3684
6198
6198
3440
2179
1432
5647
5324
6331
4061
1167
1821

7746
4911
3446
7292
4851
1207
5124
4014
1551
1020
4794

22099
26488

30132
22150

10263
14859
11428

9009
9270
2093
10969
5537
7775
8872

12426
3539
9551
6735
6278

5917
3832
2915
2811
1226
5943
4468
5149
3310
5746
4377
1675
2142
1941
5302

19067
18313
24663

6058
7858
3688
1721
1411
6915
8768
1548
8241
5126

12106
10428
1306
10660

10535
2982
3422
6807
10700
3652
5462
2470

13652
1919
13837
12886
13764

15307
4147
8261
17870

4000
3364
10373
9995
10765
10063
7664
2030

15167
14432
4744
8430

66172

1154
2516
5397
6264
2016
7226
4587
2159
3172
7128
4135
6439

3357
12795
6016
5032
3790
9795

1089
2773
2807
2511
5675
1428
5500
4416
4818
3657
2100
4201
1853
5809
3324

3218
7200
4671
2724
5680
5011
5490
5436
5278
3558
6250
5513

1348
1056
4111
3222
3115
6740
2236
2225
6159
3296
2399

7816
2294
8202
5392
1666
3573
2486
4636
8809
5552

7229
1472
9485
8303
11235
10014

26790

10461
5235
6951
7253
2321
5300
6209

11077
7200
12466
12732
9307
5724

8966
13389
15748
9321
9519

26485

25628
7409

5031
4921
2754
8438
5421
1159
6083

41921

54369

5527
5691
1654
5048
2448
5184
3147
1207
1097
3917
5745
3438
5631
4766
3575

9665

10627
6218
17749
11375

1074
5899
2131

8079
3466

18058
18124
16027
5714

2205
4821
6996
1270
2367
4112
4910
2438
2047
3233

7409
5500
7177
5649
6079
1844
6802
1901
1077
6526
6706

4289
8988
2234
11040
6845
11720
9113

10333
9149
4373
1612

9601
7695
7429
7743
5943
7787
2752
8527
7298

2444
1043
5199
6495
2567
3107
3327
2474
4278
1965
4749
3861
5397
1602

8175
3142
12119
11175

17833
25743

6121
12210
14696
6184
6843

1272
4752
5255
3349
3690
5215
2453
6875
6112
3027
6627

3830
5336
5785
3486
2799
10751
4064
3339

4570
2916
5479
5866
3392
5626
4727
4271
1676
5444
5379
5501
1328
2235

4132
6119
2873
2854
4070
4666
2133
6679
6386
5247
5487
5537

13416
4385
16219
13329
15904

2974
1444
7025
9208
3831
7734
2756
10329

5412
7071
3655
2999
4904
3311
8148
3626
1190
3763

1148
1601
4701
1830
2882
4464
2741
5725
3895
4846
3769
2064
1823
5142
2646

5796
6035
3487
2974
3460
5449
2507
4137
1821
4027
1881
3875
1651
4901

11663
11662
10262
4073
7514
6856

39088

1699
4231
5340
3283
5848
3062
1529
3004
3272
1585
6474
2494
1921

3591
5909
3088
1788
4803
6345
5954
3339
4550
5659
3992
4990
5709
6020

6655
11308
7030
12198

48347

6769
9293
8880
9403
9009
7231
6623
6926
6564

7536
1654
1484
2284
8379
3954
5730
3731
3612
7536

7306
2192
5481
8474
2748
7296
3260
8949
4845

4838
5851
1054
5507
4343
2269
4427
1417

5364
10209
3452
16275

6753
1347
5236
5663
2566
1191
4693
1210
6737
6497
4453
5434

55141

1195
3318
2512
2792
6772
5787
6046
7455
1087
4619
6269
5003

9386
3775
15577
1053

8611
2856
1321
8372
2689
2819
6139
7258
2796

5330
2866
6566
1771
1865
7183
7054
3040
6506
3613
5963
2289

5701
1981
3130
2080
6747
1058
5269
6468
7082
4428
3806

6894
4614
4225
6120
1148
4855
5894
3212
2052
4392
3974
6120

2166
2449
1198
2267
1716
4626
4254
5825
3792
3965
3079
4234
3336
5131
5197

16171
1998
10613
5011
3798

11302
9594
5384
13600

4001
1367
2866
4570
1869
10598
1138

22478
7431
1770

6736
8759
6369
4174
6390
6182
3477
8482
1027
2259

6294
3889
4687
2736
4258
2464
2558
3207
3168
1318
2853
5786
6456
1582

18966
21701
9542

11534
9629
15652
11228
13038

13542
2809
6969

7226
4720
8095
2574
8177
1210
4888
6665
6860
8548

6032
5037
4123
8957
5387
3862
3047
7662
8200

4344
6692
4173
3943
6676
4072
4253
5508
5486
2122
6578
4780
6152

3600
6564
6743
3559
1901
7641
1587
7955
2664

1882
12414
5660
10057
15084

9317
1192
9042
9935
1735
2402

18776
18766
19656

5993
6732
1029
6777
2099
2303
3346
1154
4818
3001
7335
3900

5509
4912
4767
3925
1733
5910
4666
5347
2678
3890
1428
3795
4609
1541
3693

4311
3122
1883
6898
9278
2755
7351
1068
6640

7250
13648
9505
4934
16319

3976
11270
2623
1603
6716
9705
7600

10147
1102
3088
3778
4731
6180
6682
9474

6981
8854
15319
14545
3506

5715
9246
5910
4555
5312
6416
7850
6081

9342
1705
8303
2914
3687
4681
3930
3983
1319

7454
6329
5729
3132
3398
1086
4921
1008

50219

2828
2486
1665
3610
3379
2714
1862
4420
5801
1844
6419
4144
1781
2707

5458
5874
2300
7794
12266
9759

6535
5233
3401
2932
7351
3662
8964
3778
4542

2390
16477
14300
12561

51377

5729
9244
9257
3335
3686
1734

4314
2781
2328
6957
3778
8810

4601
7441
4593
4624
7001
6392
4539
6892
7368
2343

1742
5434
1393
7650
2384
4870
4435
5459
2489
1875
2533

1221
2932
2616
3645
1963
3987
3510
2063
1388
5179
4189
1005
6061
1703
6073

6898
5660
7151
8919
5163
7340
2180
9019
2600

7455
2778
21986

1353
5884
1073
4204
1336
3839
2491
6359
4484
3454
3654
1785
4288
1575

5518
6734
13730
13016

5487
5179
5186
1636
5782
2713
7965
4517
2166
7588
5561

6341
8423
6666
4274
4991
1549
2993
3222
3849
4645

10607
3063
6829
10905
13762
1338

4363
2323
7395
2354
5682
3783
1712
1993
4115
1159
6349
4009

10523
11627
13437

24821
24505
1631

12446
9367
9117
11534
4904

4406
4139
5864
1375
4482
6034
5040
3018
1167
4467
5764
1953
2106
3005

3594
6609
9616
5043
3376
7637
7050
2159

10077
2789
7027
8543
4002
4236
6946
8727

2998
3022
5460
4318
5773
6476
2322
2789
5609
7158
5754

1519
4833
3654
1556
6353
4905
2547
3520
1293
2681
2888
1893

6899
10255
8001
14776

2127
1159
4476
5880
4286
5558
1419
2255
4175
4864
5758
1410
6298
1452

9257
4784
3514
9788
6789
1032
2910

15487
6781

6248
4479
7650
2293
3777
4842
4741
6988
2255
7398
7997

63711

28407

7699
4506
6397
8616
1976
4431
7923
7606
6258

4199
8012
3922
9853
1601
8286
3591

4992
2933
6363
4424
4473
4228
6835
3844
6737
2749
1189
2485
6334

1147
1213
6675
5860
2569
5297
4158
3255
4135
5203
4447

1896
2683
1889
5998
5185
6293
6282
2383
4381
1205
6562
6062
4987

6877
7073
6943
2779
4098
7419
5301
5382
6020
6196
3394
2196

5969
10872
13093
6698
2443
6201

3215
3355
6528
3106
2765
1648
4432
3772
5249
1809
3614
2782
1436

6726
4915
2094
2244
4877
7429
2600
6887
7626

30258

5419
6983
1458
1995
8534
1344
8977
8540

4520
5522
3190
5661
4705
3348
1533
3234
5609
2508
2516
5891
4992
5735
4888

6881
4632
2352
2790
8795
5615
8486
5811
8624
2562

2414
3784
3938
1830
2867
1585
1676
4046
4579
4853
3459
3285
1407
1049

16971
11806
3436
5511

6725
5362
7309
2123
6661
2204
3729
1881
4366
6134
4459
5020

3645
2004
4363
5073
4785
1695
5964
1526
3166
1163
4752
4803
3869
5508
4753

3897
7400
7035
5052
4300
2957
1413
6351
4224
4136
6699
2321

5805
10432
3709
6485
2460
9451
5596
4519

10795
5608
2207
8668
11870

2523
2746
5520
2189
6879
7694
1539

8563
3754
6578
6739
7106
7489
6241
3464

2338
2889
4542
6272
3155
1688
4989
2240
5768
7029
3038
3577

2930
5485
5457
2100
3148
4166
5169
1214
6480
3017
2498
2012
3568
3623

7095
5106
2915
3886
7090
7959
3378
8352
6090

1320
11916

10656
13478
13485
6218
6178
2203

19909
9418
17273

6504
6269
3367
9037
7752
8057
8476

8463
13355
4512
15675
14901

5833
1649
5960
2611
4916
1377
6120
1908
2881
6329
5078
1203
3751

21452
6902
20285

1981
4842
5032
4593
3831
6105
2784
1721
4013
4975
2047
3350
5940
5025
2897

5547
5530
3077
2667
6635
2516
5130
4057
6253
5027
3269

56467

2199
12036
11816
13439
2669
6742

16686
9126
3899
12258

4968
5127
6695
9156
10568
11424

2113
2073
1515
2481
3776
6924
7509
6538
4903
7817
6449

4694
2538
3717
2004
3659
5035
6576
6409
6118
3320
2862
4587
4474

1315
4654
3185
2084
4314
3462
4106
3731
1307
2097
1377
1409
4452
4003
5062

11021
10708
6140

3474
2398
6221
4302
7882
6993
7859
6741
6879
5658

2272
2408
2982
3980
2694
6784
2586
2284
5248
5597
5626
5627

7595
23171
21703

7670
12872
2840

6806
5093
2478
6701
10487
6450
1418
5820

8471
6625
3667
2471
4580
8753
4232
5332
7366
4771

15580
9188
2311
2491
11136

6289
13517
18667
15988

6422
7763
7819
8000
3256
8081
2616
5682
3561
3303
6639

6074
12194
11521
20082

4452
5087
1404
4855
4351
3828
1845
1364
5703
6114
5019
6621
4801

5673
8859
7347
7314
6052
13657

10820
13224
15323
13981
9124

9652
5549
8223
4316
3339
7222
3860
6507
2332

14294
1064
16114
1225
2805

9257
3007
15243

4500
1977
6911
5741
3283
1293
6773
2327
3949
6549
2081
2084
4609

13452
3263
5825
2999
6279
10703

12556
13409
8085
10946
13299
11478

5378
5891
3497
6058
5978
2741
5095
1129
5244
6327
3301
2972

31231

5888
4829
3209
5493
2214
4598
3213
2883
6057
5044
5694
5525
1542
1061
2095

10010
36255

8520
4189
3175
4174
2515
8521
1463
1650
2311
2168

9208
7297
5854
4000
2440
5123
9122
1954
2001

5686
6059
3524
3452
5398
3567
4143
3372
5678
2460
3192
3608
4967
5734

7771
4546
4914
10115
6064
7812
1024
1449

19573
18986
5792
12360

8322
12444
14319
16102
2355

4555
9276
8886
9254
8612
6275
6138
2308
4817

14640
5002
10299
2642
7894

4132
1982
2528
6423
7362
3411
2517
2341
6986
2665
2066

8485
2525
6260
6158
7326
2357
8293
8645
6110

4670
10278
3634
9650

11712
3711
8557
12500
13416
4576

7567
12678
1790
10206

21958
19045
2715

4224
5002
6715
6172
4562
2535
4234
5192
7261
6334

5051
1138
4174
6259
2795
5019
4324
4285
2835
1747
5013
5597
5131
5326

7467
4965
5400
7188
4112
11432
8819

7980
7920
7873
1707
12912
13223

2003
4342
6881
4624
4439
2261
3757
1060
6110
3069
6443
5998

17474
1294
1644

3985
1517
2968
5277
4162
2195
2099
2191
3845
4132
3599
1167
6182
6049

8339
18527
24201

2738
11523
8542
10051
5795
10019
6352

6440
12793
7863
8842
6460
7960

12902
13776
1102
2253
13371
7432

3699
6806
2939
2898
2882
3372
1588
4139
3725
4050
4902
3399
3510

51008

4810
6932
2937
2360
2970
9391
2328
2858
8592

5590
8559
3849
5295
10756
6575

3167
1611
2242
7874
4965

18574
9520
13808
10940

4419
2530
5628
4242
1776
5088
4832
3058
5351
3563
3263
1440
4755
4809
5239

4172
6034
2340
3069
6060
6540
4218
4952
3007
5896
5887
4499
3131

8307
3848
4630
4805
8518
7851
9487
6024
7817

26423

4060
4075
2861
5826
4376
5709
4999
2350
4640
2766
5448
1977
2375
2294
2983

1741
6129
2952
6678
2026
1402
3755
6006
3557
2341
6354
6428
3499

15962
3104
4558
6847
3306

6843
6095
6772
4786
3596
3607
3288
7060
4854
6755

2006
5398
6750
5303
4130
3840
5869
1938
2848
5352
2988
5588
2832

1955
1759
5340
5490
1672
5721
3799
2531
1436
4314
4446
4433
1501
3829
2195

8497
6965
5564
7284
3034
6949
1597
7135

4675
2385
2288
1062
4246
2789
3717
2864
3241
3934
3093
5160
4161
2253

1577
7007
3733
13201
13749

41763

4131
7878
7007
1906
5265
5518
2540
7967
3581
2276
7376

1159
2713
2770
5140
2422
1183
1746
3840
1537
2803
3759
2774
1684
5821

5488
7625
3390
6026
3282
1661
5021
6326
2661
3857
6895

5517
6283
6227
1658
8520
9219
7024
1400
5532

13386
8057
10577

1954
4325
1580
5270
1887
2577
2652
4878
5630
5012
4859
4836
2649
1468

2661
16077
6030
1807`;

const part1 = (input: string) => {
  const parsed = select(
    input.split('\n\n'),
    (line) => line.split('\n').map(Number),
    () => true
  );
  const elves: number[][] = parsed;
  const calories = select(elves, sum, isArray);
  const heaviest = max(calories);
  return heaviest;
};

console.log('Part 1: ', part1(input));
